import { db } from "../../../db/index"
import { products } from "../../../db/schema";
import { eq } from "drizzle-orm";
export default defineEventHandler(async event => {
    try {

        await db.execute(`SELECT 1`);
        console.log("Database connection successful.");
        const productID = getRouterParam(event, 'id')
        const product = await db.query.products.findFirst({
            where: eq(products.id, productID)

        });

        return product
    }
    catch (error) {
        console.error("Database error:", error);
        return null;
    }
})
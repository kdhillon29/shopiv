
import { products } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { useDrizzle } from "../../../utils/drizzle";

export default defineEventHandler(async event => {
    try {

        await useDrizzle().execute(`SELECT 1`);
        console.log("Database connection successful.");
        const productID = getRouterParam(event, 'id')
        const product = await useDrizzle().query.products.findFirst({
            where: eq(products.id, productID)

        });

        return product
    }
    catch (error) {
        console.error("Database error:", error);
        return null;
    }
})
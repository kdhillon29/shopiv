
import { db } from "../../db/index"
import { products } from "../../db/schema";

export default defineEventHandler(async () => {
    console.log("Fetching products from database...");
    try {
        await db.execute(`SELECT 1`);
        console.log("Database connection successful.");
        const products = await db.query.products.findMany();
        console.log(`Fetched ${products.length} products.`);
        return products;
    }

    catch (error) {
        console.error("Database error:", error);
        return [];
    }
});
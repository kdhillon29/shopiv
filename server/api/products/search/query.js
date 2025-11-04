import { or, like } from "drizzle-orm"
import { useDrizzle } from "../../../utils/drizzle"

import { products } from "../../../db/schema";

export default defineEventHandler(async event => {
    const query = getQuery(event)
    const queryItem = query.input
    if (!queryItem || queryItem.trim().length < 2) {
        return
    }
    console.log(`Searching products for query: ${queryItem}`)
    try {
        await useDrizzle().execute(`SELECT 1`);
        console.log("Database connection successful.");
        const items = await useDrizzle().select().from(products).where(
            or(like(products.title, `%${queryItem}%`),
                like(products.description, `%${queryItem}%`),
            ));
        console.log(`Found ${items.length} matching products.`);
        return items
    }
    catch (error) {
        console.error("Database error:", error);
        return [];
    }
})
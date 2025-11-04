// import { uuid } from "drizzle-orm/pg-core";
import { useDrizzle } from "../../../utils/drizzle";
import {
  products,
} from "../../../db/schema";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { title, description, image, category, price } = query;
  console.log("product data", title, description, image, category, price);
  if (title && description && image && category && price) {
    const product = {
      title: title,
      category: category,
      description: description,
      image: image,
      price: parseInt(price),
    };

    let newProductId;

    try {
      await useDrizzle().execute(`SELECT 1`);
      console.log("Database connection successful.");
      newProductId = useDrizzle().insert(products).values(product).returning({ insertId: products.id });
    } catch (err) {
      console.error("insert prodcut", err);
    } finally {
      console.log("new product", newProductId);
    }

    return newProductId;
  }
});

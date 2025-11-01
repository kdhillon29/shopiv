import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { products } from "./schema";
import { $fetch } from "ofetch";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env file");
const productsURL = "https://fakestoreapi.com/products";
const productsData = (await $fetch(
  productsURL
)) as (typeof products.$inferInsert)[];
const seedData = productsData.map(({ id, ...rest }) => rest);

const main = async () => {
  const client = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(client);
  const data: (typeof products.$inferInsert)[] = [];

  try {
    await client.connect();
    console.log("Database connected successfully");
    console.log("Seed start");
    await db.insert(products).values(seedData);
    console.log("Seed done");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await client.end();
    console.log("Database connection closed");
  }
};

await main();

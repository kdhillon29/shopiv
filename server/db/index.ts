import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";
import postgres from "postgres";
// import { Pool } from "pg";

import * as schema from "../db/schema";

const client = postgres(process.env.DATABASE_URL || "", {
  prepare: false,
});
// const client = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
export const db = drizzle(process.env.DATABASE_URL!);

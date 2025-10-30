import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "postgres";
import { Pool } from "pg";

import * as schema from "../db/schema";

// const queryClient = postgres(process.env.DATABASE_URL || "", {
//   prepare: false,
// });
const client = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export const db = drizzle(client, { schema });

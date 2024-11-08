import { drizzle } from "drizzle-orm/mysql2"
import { env } from 'process'
import * as schema from './db/tables/schema.mjs'

export const db = drizzle(env.DATABASE_URL, { schema, mode: 'planetscale' })
import { drizzle } from "drizzle-orm/mysql2"
import { env } from 'process'

export const db = drizzle(env.DATABASE_URL)
import { sql } from 'drizzle-orm'
import { timestamp } from 'drizzle-orm/mysql-core'


export function timestamps() {
  return {
    updated_at: timestamp(),
    created_at: timestamp().default(sql`CURRENT_TIMESTAMP`).notNull(),
    deleted_at: timestamp(),
  }
}
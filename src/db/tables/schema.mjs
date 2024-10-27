import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core'
import { timestamps } from './defaults.mjs'

export const users = mysqlTable('users', {
  ...timestamps(),
  id: serial().primaryKey(),
  password: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  avatar: varchar({ length: 255 }),
  age: int(),
  email: varchar({ length: 255 }).notNull().unique(),
})
import { int, mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core'
import { timestamps } from './defaults.mjs'
import { relations } from 'drizzle-orm'
import { integer } from 'drizzle-orm/pg-core'

export const users = mysqlTable('users', {
  ...timestamps(),
  id: serial().primaryKey(),
  password: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  avatar: varchar({ length: 255 }),
  age: int(),
  email: varchar({ length: 255 }).notNull().unique(),
})

export const posts = mysqlTable('posts', {
  ...timestamps(),
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  content: text(),
})

export const images = mysqlTable('images', {
  ...timestamps(),
  postId: integer().references(() => posts.id),
  id: serial().primaryKey(),
  url: varchar({ length: 255 }).notNull(),
})


export const postsRelations = relations(posts, ({ many }) => ({
  images: many(images),
}))

export const imagesRelations = relations(images, ({ one }) => ({
  posts: one(posts, {
    fields: [images.postId],
    references: [posts.id],
  }),
}))

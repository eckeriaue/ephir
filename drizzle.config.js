import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './.drizzle',
  schema: './src/db/tables/schema.mjs',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
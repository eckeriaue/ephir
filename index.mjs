import chalk from 'chalk'
import fastify from 'fastify'
import { env } from 'node:process'
import { fileURLToPath } from 'node:url'

const port = parseInt(env.PORT || '3000')
const host = env.HOST || '127.0.0.1'

const app = fastify({
  logger: {
    enabled: true,
  },
})

app
.register(import('@fastify/multipart'))
.register(import('@fastify/static'), {
  root: fileURLToPath(new URL('./public', import.meta.url)),
})
.register(import('convert-to-webp/converterPlugin.mjs'))
.listen({ port, host })
.catch(err => {
  app.log.error(err)
  process.exit(1)
})
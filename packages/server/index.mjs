import fastify from 'fastify'
import { env } from 'node:process'
import { fileURLToPath } from 'node:url'
import handlebars from 'handlebars'
import { readFile } from 'node:fs/promises'

const port = parseInt(env.PORT || '3000')
const host = env.HOST || '127.0.0.1'
const logger = env.LOGGER === 'true'

const app = fastify({
  logger: true,
})


app
.get('/@ephir/wc', function(req, rep) {
  rep.header('content-type', 'application/javascript')
  return readFile('../../node_modules/@ephir/wc/dist/index.js', 'utf-8')
})
.register(import('./src/auth.mjs'))
.register(import('@fastify/multipart'))
.register(import('@fastify/formbody'))
.register(import('@fastify/cookie'))
.register(import('@fastify/view'), {
  root: fileURLToPath(new URL('./public/views', import.meta.url)),
  engine: { handlebars },
})
.register(import('@fastify/static'), {
  root: fileURLToPath(new URL('./public', import.meta.url)),
})
.get('/', function(req, rep) {
  if (req.isAuth()) {
    return rep.view('posts.html', {
      user: req.user,
    }, {
      layout: './layouts/main.html'
    })
  } else {
    rep.redirect('/signin')
  }
})
.listen({ port, host })
.catch(err => {
   app.log.error(err)
  process.exit(1)
})
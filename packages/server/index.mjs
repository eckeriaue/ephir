import fastify from 'fastify'
import { env } from 'node:process'
import { fileURLToPath } from 'node:url'
import handlebars from 'handlebars'
import { nonEmpty, object, pipe, safeParse, string } from 'valibot'
import { db } from './src/db.mjs'
import { images, posts, users } from './src/db/tables/schema.mjs'

const port = parseInt(env.PORT || '3000')
const host = env.HOST || '127.0.0.1'

const app = fastify({
  logger: {
    enabled: true,
    transport: {
      target: "@fastify/one-line-logger",
    },
  },
})


app
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
.get('/', async function(req, rep) {


  if (req.isAuth()) {
    return rep.view('posts', {
      user: req.user,
    }, {
      posts: [],
      layout: './layouts/main'
    })
  } else {
    rep.redirect('/signin')
  }
})
.get('/templates/:name', function(req, rep) {
  return rep.viewAsync(`./templates/${req.params.name}`)
})
.post('/posts/create', function(req, rep) {
  const { output } = safeParse(
    object({
      name: pipe(string(), nonEmpty()),
      editor: pipe(string(), nonEmpty())
    }),
    req.body
  )
})

.listen({ port, host })
.catch(err => {
   app.log.error(err)
  process.exit(1)
})
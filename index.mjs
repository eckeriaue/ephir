import fastify from 'fastify'
import { env } from 'node:process'
import { fileURLToPath } from 'node:url'
import handlebars from 'handlebars'

const port = parseInt(env.PORT || '3000')
const host = env.HOST || '127.0.0.1'

const app = fastify({
  logger: {
    enabled: true,
  },
})

app
.register(import('@fastify/multipart'))
.register(import('@fastify/formbody'))
.register(import('@fastify/jwt'), {
  secret: env.JWT_SECRET,
})
.register(import('@fastify/view'), {
  root: fileURLToPath(new URL('./public/views', import.meta.url)),
  engine: { handlebars },
})
.register(import('@fastify/static'), {
  root: fileURLToPath(new URL('./public', import.meta.url)),
})
.post('/api/login', function(req, rep) {
  const { rememberMe, login, password } = req.body
  const token = this.jwt.sign({
    login,
    password,
  })
  rep.send(token)
})
.get('/login', function(req, rep) {
  return rep.view('login.html', undefined, {
    layout: './layouts/login.html',
  })
})
.get('/register', function(req, rep) {
  return rep.view('register.html', undefined, {
    layout: './layouts/login.html',
  })
})
.listen({ port, host })
.catch(err => {
   app.log.error(err)
  process.exit(1)
})
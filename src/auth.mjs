import fp from 'fastify-plugin'
import { minLength, nonEmpty, object, safeParse, string as vString, pipe, email as vEmail, email } from 'valibot'
import { db } from './db.mjs'
import { users } from './db/tables/schema.mjs'
import { decode, encode } from './lib/base64.mjs'
import { readFile } from 'fs/promises'

/**
 * @param {import("fastify").FastifyInstance} app
*/
export default fp(function authPlugin(app) {
  app
  .decorateRequest('user', undefined)
  .decorateRequest('isAuth', () => false)
  .addHook('preHandler', (req, rep, done) => {
    req.isAuth = () => !!req.cookies.authorization
    if (req.isAuth() && !req.user) {
      req.user = JSON.parse(decode(req.cookies.authorization.replace('Basic ', '')))
    }
    done()
  })
  .post('/signin', function(req, rep) {
    const { rememberMe, login, password } = req.body
  })
  .get('/signin', function(req, rep) {
    return rep.view('login.html', undefined, {
      layout: './layouts/login.html',
    })
  })

  .post('/signup', async function(req, rep) {
    const { output, issues } = safeParse(
      object({
        email: vEmail(),
        name: pipe(vString(), nonEmpty()),
        password: pipe(vString(), nonEmpty(), minLength(6)),
        repeadPassword: pipe(vString(), nonEmpty(), minLength(6)),
      }),
      req.body,
    )
    if (output.password !== output.repeadPassword) {
      const registerForm = await rep.viewAsync('register.html', { errors: ['Пароли не совпадают'] })
      rep.code(200).send(registerForm)
    }
    output.password = encode(output.password)
    const { repeadPassword: _, ...values } = output

    await db.insert(users).values(values).catch(async error => {
      app.log.error('Ошибка при создании пользователя', error)
      rep.code(200).send()
    })

    rep.setCookie('authorization', `Basic ${encode(JSON.stringify(output))}`)
    rep.header('HX-Redirect', '/')
  })
  .get('/signup', function(req, rep) {
    return rep.view('register.html', undefined, {
      layout: './layouts/login.html',
    })
  })

})
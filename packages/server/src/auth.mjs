import { eq } from 'drizzle-orm'
import fp from 'fastify-plugin'
import { minLength, nonEmpty, object, pipe, safeParse, email as vEmail, string as vString } from 'valibot'
import { db } from './db.mjs'
import { users } from './db/tables/schema.mjs'
import { decode, encode } from './lib/base64.mjs'

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
      const { email, name, id } = JSON.parse(decode(req.cookies.authorization.replace('Basic ', '')))
      req.user = { email, name, id }
    }
    done()
  })
  .post('/signin', async function(req, rep) {
    let { rememberMe, email, password } = req.body
    password = encode(password)
    const [user] = await db.select().from(users).where(
      eq(users.email, email)
    )
    if (!user) {
      rep.code(200).send(await rep.viewAsync('login', {
        errors: ['Пользователь не найден']
      }))
    } else if (user.password !== password) {
      rep.code(200).send(await rep.viewAsync('login', {
        errors: ['Не верный пароль']
      }))
    }
    rep.setCookie('authorization', `Basic ${encode(JSON.stringify(user))}`)
    rep.header('HX-Redirect', '/')
  })
  .get('/signin', function(req, rep) {
    return rep.view('login', undefined, {
      layout: './layouts/login',
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
      const registerForm = await rep.viewAsync('register', { errors: ['Пароли не совпадают'] })
      rep.code(200).send(registerForm)
    }
    output.password = encode(output.password)
    const { repeadPassword: _, ...values } = output

    const [
      { insertId: id }
    ] = await db.insert(users).values(values).catch(async error => {
      app.log.error('Ошибка при создании пользователя', error)
      rep.code(200).send()
    })

    output.id = id

    rep.setCookie('authorization', `Basic ${encode(JSON.stringify(output))}`)
    rep.header('HX-Redirect', '/')
  })
  .get('/signup', function(req, rep) {
    return rep.view('register', undefined, {
      layout: './layouts/login',
    })
  })

  .post('/signout', function(req, rep) {
    rep.setCookie('authorization', '')
    rep.header('HX-Redirect', '/signin')
    rep.redirect('/signin')
  })

})
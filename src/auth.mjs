import fp from 'fastify-plugin'
import { minLength, nonEmpty, object, safeParse, string as vString, pipe, email as vEmail } from 'valibot'
import { db } from './db.mjs'
import { users } from './db/tables/schema.mjs'
import { encode } from './lib/base64.mjs'

/**
 * @param {import("fastify").FastifyInstance} app
*/
export default fp(function authPlugin(app) {
  app
  .decorateRequest('isAuth', () => false)
  .addHook('preHandler', async (req, rep) => {
    req.isAuth = () => !!req.headers.authorization
  })

  .post('/signin', function(req, rep) {
    const { rememberMe, login, password } = req.body
  })
  .get('/signin', function(req, rep) {
    console.info(app.db)
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
      rep.code(400).send('пароли не совпадают')
    }
    output.password = encode(output.password)
    const { repeadPassword: _, ...values } = output
    await db.insert(users).values(values).then(console.info)
    return `<div> ok </div>`
  })
  .get('/signup', function(req, rep) {
    return rep.view('register.html', undefined, {
      layout: './layouts/login.html',
    })
  })

})
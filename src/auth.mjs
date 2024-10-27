import fp from 'fastify-plugin'
import { db } from './db.mjs'

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

  .post('/signup', function(req, rep) {
    const { login, password, repeadPassword } = req.body
  })
  .get('/signup', function(req, rep) {
    return rep.view('register.html', undefined, {
      layout: './layouts/login.html',
    })
  })

})
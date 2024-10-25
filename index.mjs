import fastify from 'fastify'
import { join } from 'path'
import { env } from 'process'
import { noop } from 'radashi'

const isProduction = env.NODE_ENV === 'production'
const port = env.PORT || 5173
const base = env.BASE || '/'

const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : noop()

const app = fastify()

let vite
if (!isProduction) {
	await fastify.register(import('@fastify/middie'))

	// generate the dev server
	vite = await createViteServer({
		server: { middlewareMode: true },
		appType: 'custom'
	})

	app.use(vite.middlewares)
} else {
	await fastify.register(import('@fastify/static'), {
		root: join(__dirname, '.vite/client/assets'),
		prefix: '/assets/',
	})
}
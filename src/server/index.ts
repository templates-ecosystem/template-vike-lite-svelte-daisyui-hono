import { Hono } from 'hono'
import { cors } from 'hono/cors'
// import { logger } from 'hono/logger'
import { renderPage } from 'vike-lite/server'

const app = new Hono()

// app.use(logger())

if (process.env.NODE_ENV === 'production') {
  app.use(cors())
}

// Catch-all remaining requests using custom rendering
app.get('*', async (c, next) => {
  const response = await renderPage(c.req.raw)
  return response ?? next()
})

app.onError((error, c) => {
  console.error(error)
  return c.json({ error: 'Internal Server Error' }, 500)
})

export default app

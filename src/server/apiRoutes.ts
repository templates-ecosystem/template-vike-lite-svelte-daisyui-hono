import { type Context, Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'

import api from './api'

const apiRoutes = new Hono()

type AnyApiFn = (payload?: unknown) => Promise<unknown>

apiRoutes.post('/:functionName', async (c: Context) => {
  const functionName = c.req.param('functionName') as keyof typeof api
  if (!Object.hasOwn(api, functionName)) return c.json({ error: 'Function not found' }, 400)
  try {
    const contentType = c.req.header('content-type')
    let result
    if (contentType) {
      let payload
      const contentLength = c.req.header('content-length')
      if (contentLength && parseInt(contentLength) > 0) {
        if (contentType.includes('application/json')) payload = await c.req.json()
        else if (contentType.includes('multipart/form-data')) payload = await c.req.parseBody()
        else return c.json({ error: 'Unsupported Content-Type' }, 400)
      }
      result = await (api[functionName] as AnyApiFn)(payload)
    } else {
      result = await (api[functionName] as AnyApiFn)()
    }
    if (result instanceof Response) return result
    return c.json(result)
  } catch (error) {
    console.error(error)
    if (error instanceof HTTPException) return c.json({ error: error.name, message: error.message }, error.status)
    return c.json({ error: 'Internal Server Error' }, 500)
  }
})

export default apiRoutes

import { type Context, Hono } from 'hono'

import api from './api'

const apiRoutes = new Hono()

apiRoutes.post('/api/:functionName', async (c: Context) => {
  const functionName = c.req.param('functionName') as keyof typeof api
  if (!Object.hasOwn(api, functionName)) {
    return c.json({ error: 'Function not found' }, 400)
  }
  try {
    return await api[functionName](c)
  } catch (error) {
    console.error(error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

export default apiRoutes

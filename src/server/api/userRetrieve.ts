import type { Context } from 'hono'

export async function userRetrieve(c: Context) {
  return c.text('Hello World!')
}

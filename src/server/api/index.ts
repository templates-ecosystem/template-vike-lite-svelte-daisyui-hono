import { userRetrieve } from './userRetrieve'
import { userUpdate } from './userUpdate'

export default {
  userRetrieve,
  userUpdate
}

export type ApiRoutesMap = {
  [K in keyof typeof import('./index').default as `/api/${K}`]: {
    body: Parameters<typeof import('./index').default[K]>[0]
    response: Awaited<ReturnType<typeof import('./index').default[K]>>
  }
}

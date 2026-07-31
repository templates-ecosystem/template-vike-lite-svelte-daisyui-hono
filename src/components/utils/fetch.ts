import type { ApiRoutesMap } from '@/server/api'

const HEADERS = {
  'Content-Type': 'application/json'
}

export async function apiCall<U extends keyof ApiRoutesMap>(url: U, body?: ApiRoutesMap[U]['body']): Promise<ApiRoutesMap[U]['response']> {
  const res = await fetch(url, {
    method: 'POST',
    headers: HEADERS,
    body: body ? JSON.stringify(body) : undefined
  })
  try {
    if (res.ok) {
      const data = await res.json()
      return data as ApiRoutesMap[U]['response']
    }
  } catch (error) {
    throw new Error((error as Error).message)
  }
  throw new Error(`Request failed with status ${res.status}`)
}

import { Middleware } from 'openapi-fetch'
import { ActionStepTokenClient } from '../types'

export const authMiddleware = (auth: ActionStepTokenClient): Middleware => {
  return {
    async onRequest({ request }) {
      const token = await auth.token()
      request.headers.set('Authorization', `Bearer ${token.access_token}`)
      request.headers.set('Content-Type', 'application/vnd.api+json')
      request.headers.set('Accept', 'application/vnd.api+json')

      return request
    },
    async onResponse({ response }) {
      return response
    },
  }
}

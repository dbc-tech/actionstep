import { Middleware } from 'openapi-fetch'
import { ActionStepTokenClient } from '../types'

export const authMiddleware = (auth: ActionStepTokenClient): Middleware => {
  return {
    async onRequest(req) {
      const token = await auth.token()
      req.headers.set('Authorization', `Bearer ${token.access_token}`)
      req.headers.set('Content-Type', 'application/vnd.api+json')
      req.headers.set('Accept', 'application/vnd.api+json')

      return req
    },
    async onResponse(res) {
      return res
    },
  }
}

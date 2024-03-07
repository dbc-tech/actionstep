import { Middleware } from 'openapi-fetch'
import { ActionStepTokenClient } from '../types'

export const authMiddleware = (auth: ActionStepTokenClient): Middleware => {
  return {
    async onRequest(req) {
      const token = await auth.token()
      req.headers.set('Authorization', `Bearer ${token.access_token}`)
      return req
    },
  }
}

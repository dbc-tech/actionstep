export * from './actions.schema'

import createClient from 'openapi-fetch'
import type { Actions } from './actions.schema'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'

export type PagedActionsSuccessResponse =
  Actions.paths['/actions']['get']['responses'][200]['content']['application/json']

export type ActionSuccessResponse =
  Actions.paths['/actions/{id}']['get']['responses'][200]['content']['application/json']

export type ActionsUpdate = Actions.components['schemas']['Update']

export const actionsClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<Actions.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getActions: (params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/actions', {
        params: {
          query,
        },
      })
    },
    getAction: (id: number, params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/actions/{id}', {
        params: {
          path: {
            id,
          },
          query,
        },
      })
    },
    updateAction: (id: number, body: ActionsUpdate) => {
      return client.PUT('/actions/{id}', {
        params: {
          path: {
            id,
          },
        },
        body,
      })
    },
  }
}

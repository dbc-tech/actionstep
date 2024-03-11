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

export type ActionsClient = ReturnType<typeof createClient<Actions.paths>>

export const getActions = async (
  client: ActionsClient,
  page: number = 1,
  pageSize: number = 50,
) => {
  return client.GET('/actions', {
    params: {
      query: {
        pageSize,
        page,
      },
    },
  })
}

export const getAction = async (client: ActionsClient, id: number) => {
  return client.GET('/actions/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const updateAction = async (
  client: ActionsClient,
  id: number,
  body: ActionsUpdate,
) => {
  return client.PUT('/actions/{id}', {
    params: {
      path: {
        id,
      },
    },
    body,
  })
}

export const actionsClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<Actions.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getActions: (page: number = 1, pageSize: number = 50) =>
      getActions(client, page, pageSize),
    getAction: (id: number) => getAction(client, id),
    updateAction: (id: number, body: ActionsUpdate) =>
      updateAction(client, id, body),
  }
}

export * from './actionparticipants.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { ActionParticipants } from './actionparticipants.schema'

export type PagedActionParticipantsSuccessResponse =
  ActionParticipants.paths['/actionparticipants']['get']['responses'][200]['content']['application/json']

export type ActionParticipantsSuccessResponse =
  ActionParticipants.paths['/actionparticipants/{id}']['get']['responses'][200]['content']['application/json']

export type ActionParticipantsCreate =
  ActionParticipants.components['schemas']['CreateActionParticipants']

export const actionParticipantsClient = (
  tokenClient: ActionStepTokenClient,
) => {
  const client = createClient<ActionParticipants.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getActionParticipants: (params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/actionparticipants', {
        params: {
          query,
        },
      })
    },
    createActionParticipant: (body: ActionParticipantsCreate) => {
      return client.POST('/actionparticipants', {
        body,
      })
    },
    getActionParticipant: (id: string, params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/actionparticipants/{id}', {
        params: {
          path: {
            id,
          },
          query,
        },
      })
    },
    deleteActionParticipant: (id: string) => {
      return client.DELETE('/actionparticipants/{id}', {
        params: {
          path: {
            id,
          },
        },
      })
    },
  }
}

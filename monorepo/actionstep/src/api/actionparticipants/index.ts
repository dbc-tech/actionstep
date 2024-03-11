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

export type ActionParticipantsClient = ReturnType<
  typeof createClient<ActionParticipants.paths>
>

export const getActionParticipants = async (
  client: ActionParticipantsClient,
  page: number = 1,
  pageSize: number = 50,
) => {
  return client.GET('/actionparticipants', {
    params: {
      query: {
        pageSize,
        page,
      },
    },
  })
}

export const createActionParticipant = async (
  client: ActionParticipantsClient,
  body: ActionParticipantsCreate,
) => {
  return client.POST('/actionparticipants', {
    body,
  })
}

export const getActionParticipant = async (
  client: ActionParticipantsClient,
  id: string,
) => {
  return client.GET('/actionparticipants/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const deleteActionParticipant = async (
  client: ActionParticipantsClient,
  id: string,
) => {
  return client.DELETE('/actionparticipants/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const actionParticipantsClient = (
  tokenClient: ActionStepTokenClient,
) => {
  const client = createClient<ActionParticipants.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getActionParticipants: (page: number = 1, pageSize: number = 50) =>
      getActionParticipants(client, page, pageSize),
    createActionParticipant: (body: ActionParticipantsCreate) =>
      createActionParticipant(client, body),
    getActionParticipant: (id: string) => getActionParticipant(client, id),
    deleteActionParticipant: (id: string) =>
      deleteActionParticipant(client, id),
  }
}

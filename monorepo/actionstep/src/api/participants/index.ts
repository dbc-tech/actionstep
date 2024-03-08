export * from './participants.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { Participants } from './participants.schema'

export type PagedParticipantsSuccessResponse =
  Participants.paths['/participants']['get']['responses'][200]['content']['application/json']

export type ParticipantSuccessResponse =
  Participants.paths['/participants/{id}']['get']['responses'][200]['content']['application/json']

export type ParticipantsCreate =
  Participants.components['schemas']['CreateParticipants']

export type ParticipantsUpdate =
  Participants.components['schemas']['UpdateParticipants']

export type ParticipantsClient = ReturnType<
  typeof createClient<Participants.paths>
>

export const getParticipants = async (
  client: ParticipantsClient,
  page: number = 1,
  pageSize: number = 50,
) => {
  return client.GET('/participants', {
    params: {
      query: {
        pageSize,
        page,
      },
    },
  })
}

export const createParticipant = async (
  client: ParticipantsClient,
  body: ParticipantsCreate,
) => {
  return client.POST('/participants', {
    body,
  })
}

export const getParticipant = async (
  client: ParticipantsClient,
  id: number,
) => {
  return client.GET('/participants/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const updateParticipant = async (
  client: ParticipantsClient,
  id: number,
  body: ParticipantsUpdate,
) => {
  return client.PUT('/participants/{id}', {
    params: {
      path: {
        id,
      },
    },
    body,
  })
}

export const participantsClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<Participants.paths>({
    baseUrl: tokenClient.apiapi_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getParticipants: (page: number = 1, pageSize: number = 50) =>
      getParticipants(client, page, pageSize),
    createParticipant: (body: ParticipantsCreate) =>
      createParticipant(client, body),
    getParticipant: (id: number) => getParticipant(client, id),
    updateParticipant: (id: number, body: ParticipantsUpdate) =>
      updateParticipant(client, id, body),
  }
}

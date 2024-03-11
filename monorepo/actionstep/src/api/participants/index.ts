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
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/participants', {
    params: {
      query,
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
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/participants/{id}', {
    params: {
      path: {
        id,
      },
      query,
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
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getParticipants: (params?: Record<string, unknown>) =>
      getParticipants(client, params),
    createParticipant: (body: ParticipantsCreate) =>
      createParticipant(client, body),
    getParticipant: (id: number, params?: Record<string, unknown>) =>
      getParticipant(client, id, params),
    updateParticipant: (id: number, body: ParticipantsUpdate) =>
      updateParticipant(client, id, body),
  }
}

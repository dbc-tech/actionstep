import {
  actionParticipantsClient,
  actionsClient,
  dataCollectionRecordValuesClient,
  dataCollectionRecordsClient,
  dataCollectionsClient,
  fileNotesClient,
  filesClient,
  participantsClient,
  stepMessagesClient,
  tasksClient,
} from './api'
import { ActionStepTokenClient } from './types/action-step-auth.type'
import { buildURL } from './utils'

export type ApiResponse<T> = {
  data?: T
  error?: string
  response: Response
}

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
    actionParticipants: actionParticipantsClient(tokenClient),
    dataCollections: dataCollectionsClient(tokenClient),
    dataCollectionRecords: dataCollectionRecordsClient(tokenClient),
    dataCollectionRecordValues: dataCollectionRecordValuesClient(tokenClient),
    fileNotes: fileNotesClient(tokenClient),
    files: filesClient(tokenClient),
    participants: participantsClient(tokenClient),
    stepmessages: stepMessagesClient(tokenClient),
    tasks: tasksClient(tokenClient),

    post: async <T extends object>(
      path: string,
      body: unknown,
    ): Promise<ApiResponse<T>> => send(tokenClient, path, 'POST', body),
    put: async <T extends object>(
      path: string,
      body: unknown,
    ): Promise<ApiResponse<T>> => send(tokenClient, path, 'PUT', body),
    patch: async <T extends object>(
      path: string,
      body: unknown,
    ): Promise<ApiResponse<T>> => send(tokenClient, path, 'PATCH', body),
  }
}

export type ActionStepClient = ReturnType<typeof actionStepClient>

const send = async <T extends object>(
  tokenClient: ActionStepTokenClient,
  path: string,
  method: 'POST' | 'PUT' | 'PATCH',
  body: unknown,
): Promise<ApiResponse<T>> => {
  const token = await tokenClient.token()

  return fetch(buildURL(tokenClient.api_url, path), {
    method,
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (res.ok) return { data: (await res.json()) as T, response: res }
    return { error: res.statusText, response: res }
  })
}

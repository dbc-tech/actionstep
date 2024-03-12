export * from './filenotes.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { FileNotes } from './filenotes.schema'

export type PagedFileNotesSuccessResponse =
  FileNotes.paths['/filenotes']['get']['responses'][200]['content']['application/json']

export type FileNotesSuccessResponse =
  FileNotes.paths['/filenotes/{id}']['get']['responses'][200]['content']['application/json']

export type FileNotesCreate = FileNotes.components['schemas']['CreateFileNotes']

export type FileNotesUpdate = FileNotes.components['schemas']['UpdateFileNotes']

export type FileNotesClient = ReturnType<typeof createClient<FileNotes.paths>>

export const getFileNotes = async (
  client: FileNotesClient,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/filenotes', {
    params: {
      query,
    },
  })
}

export const createFileNote = async (
  client: FileNotesClient,
  body: FileNotesCreate,
) => {
  return client.POST('/filenotes', {
    body,
  })
}

export const getFileNote = async (
  client: FileNotesClient,
  id: number,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/filenotes/{id}', {
    params: {
      path: {
        id,
      },
      query,
    },
  })
}

export const updateFileNote = async (
  client: FileNotesClient,
  id: number,
  body: FileNotesUpdate,
) => {
  return client.PUT('/filenotes/{id}', {
    params: {
      path: {
        id,
      },
    },
    body,
  })
}

export const deleteFileNote = async (client: FileNotesClient, id: number) => {
  return client.DELETE('/filenotes/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const fileNotesClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<FileNotes.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getFileNotes: (params?: Record<string, unknown>) =>
      getFileNotes(client, params),
    createFileNote: (body: FileNotesCreate) => createFileNote(client, body),
    getFileNote: (id: number, params?: Record<string, unknown>) =>
      getFileNote(client, id, params),
    updateFileNote: (id: number, body: FileNotesUpdate) =>
      updateFileNote(client, id, body),
    deleteFileNote: (id: number) => deleteFileNote(client, id),
  }
}

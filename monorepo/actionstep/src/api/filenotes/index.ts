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

export const fileNotesClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<FileNotes.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getFileNotes: (params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/filenotes', {
        params: {
          query,
        },
      })
    },
    createFileNote: (body: FileNotesCreate) => {
      return client.POST('/filenotes', {
        body,
      })
    },
    getFileNote: (id: number, params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/filenotes/{id}', {
        params: {
          path: {
            id,
          },
          query,
        },
      })
    },
    updateFileNote: (id: number, body: FileNotesUpdate) => {
      return client.PUT('/filenotes/{id}', {
        params: {
          path: {
            id,
          },
        },
        body,
      })
    },
    deleteFileNote: (id: number) => {
      return client.DELETE('/filenotes/{id}', {
        params: {
          path: {
            id,
          },
        },
      })
    },
  }
}

export * from './datacollections.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { DataCollections } from './datacollections.schema'

export type PagedDataCollectionsSuccessResponse =
  DataCollections.paths['/datacollections']['get']['responses'][200]['content']['application/json']

export type DataCollectionsSuccessResponse =
  DataCollections.paths['/datacollections/{id}']['get']['responses'][200]['content']['application/json']

export type DataCollectionsCreate =
  DataCollections.components['schemas']['CreateDataCollections']

export type DataCollectionsUpdate =
  DataCollections.components['schemas']['UpdateDataCollections']

export const dataCollectionsClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<DataCollections.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getDataCollections: (params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/datacollections', {
        params: {
          query,
        },
      })
    },
    createDataCollection: (body: DataCollectionsCreate) => {
      return client.POST('/datacollections', {
        body,
      })
    },
    getDataCollection: (id: number, params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/datacollections/{id}', {
        params: {
          path: {
            id,
          },
          query,
        },
      })
    },
    updateDataCollection: (id: number, body: DataCollectionsUpdate) => {
      return client.PUT('/datacollections/{id}', {
        params: {
          path: {
            id,
          },
        },
        body,
      })
    },
    deleteDataCollection: (id: number) => {
      return client.DELETE('/datacollections/{id}', {
        params: {
          path: {
            id,
          },
        },
      })
    },
  }
}

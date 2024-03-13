export * from './datacollectionrecordvalues.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { DataCollectionRecordValues } from './datacollectionrecordvalues.schema'

export type PagedDataCollectionRecordValuesSuccessResponse =
  DataCollectionRecordValues.paths['/datacollectionrecordvalues']['get']['responses'][200]['content']['application/json']

export type DataCollectionRecordValuesSuccessResponse =
  DataCollectionRecordValues.paths['/datacollectionrecordvalues/{id}']['get']['responses'][200]['content']['application/json']

export type DataCollectionRecordValuesCreate =
  DataCollectionRecordValues.components['schemas']['CreateDataCollectionRecordValues']

export type DataCollectionRecordValuesUpdate =
  DataCollectionRecordValues.components['schemas']['UpdateDataCollectionRecordValues']

export const dataCollectionRecordValuesClient = (
  tokenClient: ActionStepTokenClient,
) => {
  const client = createClient<DataCollectionRecordValues.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getDataCollectionRecordValues: (params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/datacollectionrecordvalues', {
        params: {
          query,
        },
      })
    },
    createDataCollectionRecordValues: (
      body: DataCollectionRecordValuesCreate,
    ) => {
      return client.POST('/datacollectionrecordvalues', {
        body,
      })
    },
    getDataCollectionRecordValue: (
      id: string,
      params?: Record<string, unknown>,
    ) => {
      const query = params || {}
      return client.GET('/datacollectionrecordvalues/{id}', {
        params: {
          path: {
            id,
          },
          query,
        },
      })
    },
    updateDataCollectionRecordValue: (
      id: string,
      body: DataCollectionRecordValuesUpdate,
    ) => {
      return client.PUT('/datacollectionrecordvalues/{id}', {
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

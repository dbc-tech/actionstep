export * from './datacollectionrecords.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { DataCollectionRecords } from './datacollectionrecords.schema'

export type PagedDataCollectionRecordsSuccessResponse =
  DataCollectionRecords.paths['/datacollectionrecords']['get']['responses'][200]['content']['application/json']

export type DataCollectionRecordsSuccessResponse =
  DataCollectionRecords.paths['/datacollectionrecords/{id}']['get']['responses'][200]['content']['application/json']

export type DataCollectionRecordsCreate =
  DataCollectionRecords.components['schemas']['CreateDataCollectionRecords']

export type DataCollectionRecordsClient = ReturnType<
  typeof createClient<DataCollectionRecords.paths>
>

export const getDataCollectionRecords = async (
  client: DataCollectionRecordsClient,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/datacollectionrecords', {
    params: {
      query,
    },
  })
}

export const createDataCollectionRecord = async (
  client: DataCollectionRecordsClient,
  body: DataCollectionRecordsCreate,
) => {
  return client.POST('/datacollectionrecords', {
    body,
  })
}

export const getDataCollectionRecord = async (
  client: DataCollectionRecordsClient,
  id: number,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/datacollectionrecords/{id}', {
    params: {
      path: {
        id,
      },
      query,
    },
  })
}

export const deleteDataCollectionRecord = async (
  client: DataCollectionRecordsClient,
  id: number,
) => {
  return client.DELETE('/datacollectionrecords/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const dataCollectionRecordsClient = (
  tokenClient: ActionStepTokenClient,
) => {
  const client = createClient<DataCollectionRecords.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getDataCollectionRecords: (params?: Record<string, unknown>) =>
      getDataCollectionRecords(client, params),
    createDataCollectionRecord: (body: DataCollectionRecordsCreate) =>
      createDataCollectionRecord(client, body),
    getDataCollectionRecord: (id: number, params?: Record<string, unknown>) =>
      getDataCollectionRecord(client, id, params),
    deleteDataCollectionRecord: (id: number) =>
      deleteDataCollectionRecord(client, id),
  }
}

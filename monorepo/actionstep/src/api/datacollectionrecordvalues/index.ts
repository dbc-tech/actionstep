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

export type DataCollectionRecordValuesClient = ReturnType<
  typeof createClient<DataCollectionRecordValues.paths>
>

export const getDataCollectionRecordValues = async (
  client: DataCollectionRecordValuesClient,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/datacollectionrecordvalues', {
    params: {
      query,
    },
  })
}

export const createDataCollectionRecordValues = async (
  client: DataCollectionRecordValuesClient,
  body: DataCollectionRecordValuesCreate,
) => {
  return client.POST('/datacollectionrecordvalues', {
    body,
  })
}

export const getDataCollectionRecordValue = async (
  client: DataCollectionRecordValuesClient,
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
}

export const updateDataCollectionRecordValue = async (
  client: DataCollectionRecordValuesClient,
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
}

export const dataCollectionRecordValuesClient = (
  tokenClient: ActionStepTokenClient,
) => {
  const client = createClient<DataCollectionRecordValues.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getDataCollectionRecordValues: (params?: Record<string, unknown>) =>
      getDataCollectionRecordValues(client, params),
    createDataCollectionRecordValues: (
      body: DataCollectionRecordValuesCreate,
    ) => createDataCollectionRecordValues(client, body),
    getDataCollectionRecordValue: (
      id: string,
      params?: Record<string, unknown>,
    ) => getDataCollectionRecordValue(client, id, params),
    updateDataCollectionRecordValue: (
      id: string,
      body: DataCollectionRecordValuesUpdate,
    ) => updateDataCollectionRecordValue(client, id, body),
  }
}

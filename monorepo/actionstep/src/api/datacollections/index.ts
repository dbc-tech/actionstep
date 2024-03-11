export * from './datacollections.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { DataCollections } from './datacollections.schema'

export type PagedDataCollectionsSuccessResponse =
  DataCollections.paths['/datacollections']['get']['responses'][200]['content']['application/json']

export type DataCollectionSuccessResponse =
  DataCollections.paths['/datacollection/{id}']['get']['responses'][200]['content']['application/json']

export type DataCollectionsCreate =
  DataCollections.components['schemas']['CreateDataCollection']

export type DataCollectionsUpdate =
  DataCollections.components['schemas']['UpdateDataCollection']

export type DataCollectionsClient = ReturnType<
  typeof createClient<DataCollections.paths>
>

export const getDataCollections = async (
  client: DataCollectionsClient,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/datacollections', {
    params: {
      query,
    },
  })
}

export const createDataCollection = async (
  client: DataCollectionsClient,
  body: DataCollectionsCreate,
) => {
  return client.POST('/datacollections', {
    body,
  })
}

export const getDataCollection = async (
  client: DataCollectionsClient,
  id: number,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/datacollection/{id}', {
    params: {
      path: {
        id,
      },
      query,
    },
  })
}

export const updateDataCollection = async (
  client: DataCollectionsClient,
  id: number,
  body: DataCollectionsUpdate,
) => {
  return client.PUT('/datacollection/{id}', {
    params: {
      path: {
        id,
      },
    },
    body,
  })
}

export const deleteDataCollection = async (
  client: DataCollectionsClient,
  id: number,
) => {
  return client.DELETE('/datacollection/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const dataCollectionsClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<DataCollections.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getDataCollections: (params?: Record<string, unknown>) =>
      getDataCollections(client, params),
    createDataCollection: (body: DataCollectionsCreate) =>
      createDataCollection(client, body),
    getDataCollection: (id: number, params?: Record<string, unknown>) =>
      getDataCollection(client, id, params),
    updateDataCollection: (id: number, body: DataCollectionsUpdate) =>
      updateDataCollection(client, id, body),
    deleteDataCollection: (id: number) => deleteDataCollection(client, id),
  }
}

export * from './tasks.schema'

import createClient from 'openapi-fetch'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'
import { Tasks } from './tasks.schema'

export type PagedTasksSuccessResponse =
  Tasks.paths['/tasks']['get']['responses'][200]['content']['application/json']

export type TasksSuccessResponse =
  Tasks.paths['/tasks/{id}']['get']['responses'][200]['content']['application/json']

export type TasksCreate = Tasks.components['schemas']['CreateTasks']

export type TasksUpdate = Tasks.components['schemas']['UpdateTasks']

export type TasksClient = ReturnType<typeof createClient<Tasks.paths>>

export const getTasks = async (
  client: TasksClient,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/tasks', {
    params: {
      query,
    },
  })
}

export const createTask = async (client: TasksClient, body: TasksCreate) => {
  return client.POST('/tasks', {
    body,
  })
}

export const getTask = async (
  client: TasksClient,
  id: number,
  params?: Record<string, unknown>,
) => {
  const query = params || {}
  return client.GET('/tasks/{id}', {
    params: {
      path: {
        id,
      },
      query,
    },
  })
}

export const updateTask = async (
  client: TasksClient,
  id: number,
  body: TasksUpdate,
) => {
  return client.PUT('/tasks/{id}', {
    params: {
      path: {
        id,
      },
    },
    body,
  })
}

export const deleteTask = async (client: TasksClient, id: number) => {
  return client.DELETE('/tasks/{id}', {
    params: {
      path: {
        id,
      },
    },
  })
}

export const tasksClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<Tasks.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getTasks: (params?: Record<string, unknown>) => getTasks(client, params),
    createTask: (body: TasksCreate) => createTask(client, body),
    getTask: (id: number, params?: Record<string, unknown>) =>
      getTask(client, id, params),
    updateTask: (id: number, body: TasksUpdate) => updateTask(client, id, body),
    deleteTask: (id: number) => deleteTask(client, id),
  }
}

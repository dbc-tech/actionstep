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

export const tasksClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<Tasks.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getTasks: (params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/tasks', {
        params: {
          query,
        },
      })
    },
    createTask: (body: TasksCreate) => {
      return client.POST('/tasks', {
        body,
      })
    },
    getTask: (id: number, params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/tasks/{id}', {
        params: {
          path: {
            id,
          },
          query,
        },
      })
    },
    updateTask: (id: number, body: TasksUpdate) => {
      return client.PUT('/tasks/{id}', {
        params: {
          path: {
            id,
          },
        },
        body,
      })
    },
    deleteTask: (id: number) => {
      return client.DELETE('/tasks/{id}', {
        params: {
          path: {
            id,
          },
        },
      })
    },
  }
}

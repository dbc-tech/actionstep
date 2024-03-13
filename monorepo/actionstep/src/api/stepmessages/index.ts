export * from './stepmessages.schema'

import createClient from 'openapi-fetch'
import type { StepMessages } from './stepmessages.schema'
import { authMiddleware } from '../auth-middleware'
import { ActionStepTokenClient } from '../../types'

export type PagedStepMessagesSuccessResponse =
  StepMessages.paths['/stepmessages']['get']['responses'][200]['content']['application/json']

export type StepMessageSuccessResponse =
  StepMessages.paths['/stepmessages/{id}']['get']['responses'][200]['content']['application/json']

export const stepMessagesClient = (tokenClient: ActionStepTokenClient) => {
  const client = createClient<StepMessages.paths>({
    baseUrl: tokenClient.api_url,
  })

  client.use(authMiddleware(tokenClient))

  return {
    getStepMessages: (params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/stepmessages', {
        params: {
          query,
        },
      })
    },
    getStepMessage: (id: string, params?: Record<string, unknown>) => {
      const query = params || {}
      return client.GET('/stepmessages/{id}', {
        params: {
          path: {
            id,
          },
          query,
        },
      })
    },
  }
}

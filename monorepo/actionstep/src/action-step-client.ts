import { HttpService } from '@dbc-tech/http-kit'
import { ActionStepTokenClient } from './types/action-step-auth.type'
import { ActionStepData } from './dtos/actions.dto'
import { ActionIds } from './dtos/action-ids.dto'
import { CreateFileNotes } from './dtos/create-file-notes.dto'

export const actionStepClient = (auth: ActionStepTokenClient) => {
  const http = new HttpService(
    auth.apiapi_url,
    async () => (await auth.token()).access_token,
  )
  return {
    getActions: async (id: string): Promise<ActionStepData> => {
      const response = await http.getJson<ActionStepData>(`rest/actions/${id}`)
      return response.data
    },
    getLatestActions: async (pageSize: number): Promise<ActionIds> => {
      const response = await http.getJson<ActionIds>(
        `rest/actions?sort=-id&pageSize=${pageSize}&fields=id`,
      )
      return response.data
    },
    createFileNotes: async (filenotes: CreateFileNotes): Promise<unknown> => {
      const response = await http.postJson<unknown>(`rest/filenotes`, filenotes)
      return response.data
    },
  }
}

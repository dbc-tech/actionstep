import { ActionStepTokenClient } from '../../types'
import { buildURL } from '../../utils'
import { CreateFileSuccessResponse } from './files.schema'

export const filesClient = (tokenClient: ActionStepTokenClient) => {
  return {
    createFile: async (file: Blob, filename: string) => {
      const formData = new FormData()
      formData.set('file', file, filename)
      const url = buildURL(tokenClient.api_url, '/files')
      url.searchParams.append('part_number', '1')
      url.searchParams.append('part_count', '1')
      console.log('url:', url.toString())
      const { access_token } = await tokenClient.token()
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        return {
          data: (await response.json()) as CreateFileSuccessResponse,
          response,
        }
      }

      let error = await response.text()
      try {
        error = JSON.parse(error) // attempt to parse as JSON
      } catch {
        // noop
      }
      return { error, response }
    },
  }
}

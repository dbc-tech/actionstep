import { ActionStepTokenClient } from '@dbc-tech/actionstep'
import * as dotenv from 'dotenv'
dotenv.config()

export const deleteMethod = async (tokenClient: ActionStepTokenClient) => {
  const token = await tokenClient.token()

  const url = `${process.env.ACTIONSTEP_API_URL}/tasks/1961582`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
  })

  if (!response.ok) {
    console.error('error:', response.status, response.statusText)
  } else {
    console.log(`Status code:${response.status}`)
  }
}

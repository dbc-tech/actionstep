import { ActionStepTokenClient } from '@dbc-tech/actionstep'
import * as dotenv from 'dotenv'
dotenv.config()

export const getMethod = async (tokenClient: ActionStepTokenClient) => {
  const token = await tokenClient.token()

  const url = `${process.env.ACTIONSTEP_API_URL}/tasks/10`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-client-id': 'actionstep-sandbox',
      Authorization: `Bearer ${token.access_token}`,
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
  })

  if (!response.ok) {
    console.error('error:', response.status, response.statusText)
  } else {
    console.log(`Status code:${response.status}`)
    const json = await response.json()
    console.log('get:', json)
  }
}

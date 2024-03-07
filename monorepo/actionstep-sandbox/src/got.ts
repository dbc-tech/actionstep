import { actionStepLegacyTokenClient } from '@dbc-tech/actionstep'
import got from 'got-cjs'
import * as dotenv from 'dotenv'
dotenv.config()

const runner = async () => {
  const tokenClient = actionStepLegacyTokenClient(
    process.env.ACTIONSTEP_TOKEN_URL,
    process.env.ACTIONSTEP_API_URL,
  )

  const token = await tokenClient.token()
  const response = await got.put(
    `${process.env.ACTIONSTEP_API_URL}/actions/68330`,
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
      },
      json: {
        actions: {
          reference: 'TEST',
        },
      },
    },
  )

  console.log('response:', response.statusCode)
}

runner()
  .then(() => console.log('done'))
  .catch(console.error)

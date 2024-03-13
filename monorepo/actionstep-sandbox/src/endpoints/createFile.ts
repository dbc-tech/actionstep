import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'
import { readFile } from 'node:fs/promises'

export const createFile = async (tokenClient: ActionStepTokenClient) => {
  const { files: client } = actionStepClient(tokenClient)

  const file = new Blob([await readFile('../../samples/test.json')])
  const { data, error } = await client.createFile(file, 'test.json')
  if (error) console.error('error:', error)
  else {
    console.log('created task:', {
      id: data.files.id,
      status: data.files.status,
    })
  }
}

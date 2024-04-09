import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const deleteTask = async (tokenClient: ActionStepTokenClient) => {
  const { tasks: client } = actionStepClient(tokenClient)

  const testTaskId = 2042792

  const response = await client.deleteTask(testTaskId)
  if (response.error) console.error('error:', response.error)
  else {
    console.log(`Status code:${response.response.status}`)
  }
}

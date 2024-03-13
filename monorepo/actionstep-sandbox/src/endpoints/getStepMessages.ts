import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getStepMessages = async (tokenClient: ActionStepTokenClient) => {
  const { stepmessages: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getStepMessages({
    page: 1,
    pageSize: 10,
  })
  if (error) console.error('error:', error)
  else {
    for (const task of data.stepmessages) {
      console.log('get stepmessage:', {
        id: task.id,
        method: task.method,
        subject: task.subject,
        message: task.message,
      })
    }
  }
}

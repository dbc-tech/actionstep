import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getStepMessage = async (tokenClient: ActionStepTokenClient) => {
  const { stepmessages: client } = actionStepClient(tokenClient)

  const stepMessageId = '10--4--1'

  const { data, error } = await client.getStepMessage(stepMessageId)
  if (error) console.error('error:', error)
  else {
    console.log('get stepmessage:', {
      id: data.stepmessages.id,
      method: data.stepmessages.method,
      subject: data.stepmessages.subject,
      message: data.stepmessages.message,
    })
  }
}

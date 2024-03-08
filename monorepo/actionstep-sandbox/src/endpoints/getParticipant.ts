import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getParticipant = async (tokenClient: ActionStepTokenClient) => {
  const { participants: client } = actionStepClient(tokenClient)

  const testParticipantId = 2

  const { data, response } = await client.getParticipant(testParticipantId)
  if (data) {
    //console.log('participant:', data.participants)
    console.log('get participant:', {
      id: data.participants.id,
      firstName: data.participants.firstName,
      lastName: data.participants.lastName,
    })
  } else {
    console.log('error:', {
      status: response.status,
      statusText: response.statusText,
    })
  }
}

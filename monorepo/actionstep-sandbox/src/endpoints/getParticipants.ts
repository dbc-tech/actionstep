import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getParticipants = async (tokenClient: ActionStepTokenClient) => {
  const { participants: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getParticipants({
    page: 1,
    pageSize: 5,
  })
  if (error) console.error('error:', error)
  else {
    for (const participant of data.participants) {
      console.log('get participant:', {
        id: participant.id,
        firstName: participant.firstName,
        lastName: participant.lastName,
      })
    }
  }
}

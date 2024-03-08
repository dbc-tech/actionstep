import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const updateParticipant = async (tokenClient: ActionStepTokenClient) => {
  const { participants: client } = actionStepClient(tokenClient)

  const testParticipantId = 2

  const { data, error } = await client.updateParticipant(testParticipantId, {
    participants: {
      firstName: 'TEST',
      gender: 'M',
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('updated participant:', {
      id: data.participants.id,
      firstName: data.participants.firstName,
      lastName: data.participants.lastName,
    })
  }
}

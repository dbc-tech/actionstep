import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const createParticipant = async (tokenClient: ActionStepTokenClient) => {
  const { participants: client } = actionStepClient(tokenClient)

  const { data, error } = await client.createParticipant({
    participants: {
      firstName: 'TEST01',
      lastName: 'TEST01',
      gender: 'M',
      isCompany: 'F',
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('created participant:', {
      id: data.participants.id,
      firstName: data.participants.firstName,
      lastName: data.participants.lastName,
    })
  }
}

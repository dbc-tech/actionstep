import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getActionParticipants = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { actionParticipants: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getActionParticipants(1, 5)
  if (error) console.error('error:', error)
  else {
    for (const participant of data.actionparticipants) {
      console.log('get action participant:', {
        id: participant.id,
        number: participant.participantNumber,
      })
    }
  }
}

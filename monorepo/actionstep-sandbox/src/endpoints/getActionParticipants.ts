import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getActionParticipants = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { actionParticipants: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getActionParticipants({
    page: 1,
    pageSize: 5,
  })
  if (error) console.error('error:', error)
  else {
    const actionparticipants =
      data.actionparticipants instanceof Array
        ? data.actionparticipants
        : [data.actionparticipants]

    for (const participant of actionparticipants) {
      console.log('get action participant:', {
        id: participant.id,
        number: participant.participantNumber,
      })
    }
  }
}

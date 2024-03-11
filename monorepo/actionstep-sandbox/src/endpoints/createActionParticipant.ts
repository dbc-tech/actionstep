import {
  ActionStepClient,
  ActionStepTokenClient,
  actionStepClient,
} from '@dbc-tech/actionstep'

export const createActionParticipant = async (
  tokenClient: ActionStepTokenClient,
) => {
  const client: ActionStepClient = actionStepClient(tokenClient)

  const testActionId = 68330 // or 84407
  const testParticipantId = 113702
  const testParticipantType = 71

  const { data, error } =
    await client.actionParticipants.createActionParticipant({
      actionparticipants: {
        links: {
          action: testActionId,
          participant: testParticipantId,
          participantType: testParticipantType,
        },
      },
    })
  if (error) console.error('error:', error)
  else {
    console.log('created action participant:', {
      id: data.actionparticipants.id,
      number: data.actionparticipants.participantNumber,
    })
  }
}

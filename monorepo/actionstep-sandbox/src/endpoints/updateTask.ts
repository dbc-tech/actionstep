import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const updateTask = async (tokenClient: ActionStepTokenClient) => {
  const { tasks: client } = actionStepClient(tokenClient)

  const testTaskId = 1961747

  const { data, error } = await client.updateTask(testTaskId, {
    tasks: {
      completedTimestamp: new Date().toISOString(),
      status: 'Complete',
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('updated task:', {
      id: data.tasks.id,
      name: data.tasks.name,
      status: data.tasks.status,
      priority: data.tasks.priority,
      dueTimestamp: data.tasks.dueTimestamp,
      links: data.tasks.links,
    })
  }
}

import { ActionStepToken } from './action-step-token.type'

export type ActionStepTokenStore = {
  get: () => Promise<ActionStepToken>
  set: (token: ActionStepToken) => Promise<void>
}

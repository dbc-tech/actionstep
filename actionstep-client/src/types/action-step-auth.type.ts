import { ActionStepToken } from './action-step-token.type'

export type ActionStepAuth = {
  authorizeUrl: () => string
  callback: (code: string) => Promise<ActionStepToken>
  token: () => Promise<ActionStepToken>
}

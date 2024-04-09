import { ActionStepToken } from './action-step-token.type'

export type ActionStepTokenClient = {
  token: (forceRefresh?: boolean) => Promise<ActionStepToken>
  api_url: Readonly<string>
}

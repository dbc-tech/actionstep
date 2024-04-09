import { ActionStepToken } from '@dbc-tech/actionstep'

export type ActionStepAuthorizeClient = {
  authorizeUrl: () => string
  callback: (code: string) => Promise<ActionStepToken>
}

export type ActionStepTokenClient = {
  token: (forceRefresh?: boolean) => Promise<ActionStepToken>
  api_url: Readonly<string>
}

export type ActionStepAuth = ActionStepAuthorizeClient & ActionStepTokenClient

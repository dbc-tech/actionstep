import { ActionStepToken, ActionStepTokenClient } from './types'

export const actionStepTokenClient = (
  tokenUrl: string,
  apiUrl: string,
): ActionStepTokenClient => {
  return {
    token: async () => {
      const response = await fetch(tokenUrl)
      return (await response.json()) as ActionStepToken
    },
    api_url: apiUrl,
  }
}

type LegacyTokenformat = {
  status: number
  message: string
  data: {
    actionstep: {
      id: string
      access_token: string
      token_type: string
      expires_in: string
      api_endpoint: string
      orgkey: string
      refresh_token: string
      generated: string
      date_expiry: string
    }
  }
}
export const actionStepLegacyTokenClient = (
  tokenUrl: string,
  apiUrl: string,
): ActionStepTokenClient => {
  return {
    token: async () => {
      const response = await fetch(tokenUrl)
      const legacyToken = (await response.json()) as LegacyTokenformat
      return {
        access_token: legacyToken.data.actionstep.access_token,
        api_endpoint: legacyToken.data.actionstep.api_endpoint,
        expires_at: legacyToken.data.actionstep.date_expiry,
        expires_in: parseInt(legacyToken.data.actionstep.expires_in),
        orgkey: legacyToken.data.actionstep.orgkey,
        refresh_token: legacyToken.data.actionstep.refresh_token,
        token_type: legacyToken.data.actionstep.token_type,
      }
    },
    api_url: apiUrl,
  }
}

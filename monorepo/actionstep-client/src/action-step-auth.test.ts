import { ActionStepAuth } from './types/action-step-auth.type'
import { actionStepAuth } from './action-step-auth'

describe('RexClient', () => {
  let auth: ActionStepAuth

  beforeEach(() => {
    auth = actionStepAuth({
      client_id: 'client-id',
      client_secret: '',
      authorize_url: 'https://go.actionstep.com/api/oauth/authorize',
      token_url: 'https://api.actionstep.com/api/oauth/token',
      scope: 'all',
      redirect_uri: 'https://webhook.site/123',
      store: undefined,
      api_url: 'https://ap-southeast-2.actionstep.com/api/v2',
    })
  })

  describe('authorizeUrl', () => {
    it('should return an array of RexAccountUser objects', async () => {
      // Arrange
      const result = auth.authorizeUrl()

      expect(result).toEqual(
        'https://go.actionstep.com/api/oauth/authorize?response_type=code&client_id=client-id&redirect_uri=https%3A%2F%2Fwebhook.site%2F123&scope=all',
      )
    })
  })
})

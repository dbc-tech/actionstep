import { HttpRequest, InvocationContext } from '@azure/functions'
import { blobInput, blobOutput } from '../io/blob.io'
import {
  ActionStepClientConfig,
  ActionStepToken,
} from '../../../actionstep-client/src/types'
import { actionStepAuth } from '../../../actionstep-client/src'
export const createAuth = (
  request: HttpRequest,
  context: InvocationContext,
) => {
  const url = new URL(request.url)
  const config: ActionStepClientConfig = {
    authorize_url: process.env.ACTIONSTEP_AUTHORIZE_URL,
    client_id: process.env.ACTIONSTEP_CLIENT_ID,
    client_secret: process.env.ACTIONSTEP_CLIENT_SECRET,
    redirect_uri: url.origin + url.pathname,
    token_url: process.env.ACTIONSTEP_TOKEN_URL,
    store: {
      get: () =>
        Promise.resolve(<ActionStepToken>context.extraInputs.get(blobInput)),
      set: (token) =>
        Promise.resolve(context.extraOutputs.set(blobOutput, token)),
    },
    api_url: process.env.ACTIONSTEP_API_URL,
  }

  return actionStepAuth(config)
}

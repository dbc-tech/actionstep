import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions'
import { createAuth } from '../utils/create-auth'

export async function authHandler(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  const auth = createAuth(request, context)

  if (request.query.has('code')) {
    const code = request.query.get('code')!
    const token = await auth.callback(code)
    return {
      jsonBody: token,
    }
  }

  return {
    status: 302,
    headers: {
      Location: auth.authorizeUrl(),
    },
  }
}

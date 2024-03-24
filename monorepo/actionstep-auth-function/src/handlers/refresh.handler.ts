import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions'
import { createAuth } from '../utils/create-auth'

export async function refreshHandler(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  const auth = createAuth(request, context)

  return {
    jsonBody: await auth.token(true),
  }
}

import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions'
import { createAuth } from '../utils/create-auth'

export async function tokenHandler(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  const auth = createAuth(request, context)

  const forceRefresh = request.query.has('forceRefresh')
  return {
    jsonBody: await auth.token(forceRefresh),
  }
}

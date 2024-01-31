import { Token } from 'simple-oauth2'

export type TokenStore = {
  get: () => Promise<Token>
  set: (token: Token) => Promise<void>
}

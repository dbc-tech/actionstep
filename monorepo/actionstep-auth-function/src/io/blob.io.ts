import { input, output } from '@azure/functions'

export const blobInput = input.storageBlob({
  path: process.env.ACTIONSTEP_TOKEN_BLOB_PATH,
  connection: process.env.ACTIONSTEP_STORAGE_CONNECTION,
})

export const blobOutput = output.storageBlob({
  path: process.env.ACTIONSTEP_TOKEN_BLOB_PATH,
  connection: process.env.ACTIONSTEP_STORAGE_CONNECTION,
})

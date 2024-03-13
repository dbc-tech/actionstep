export type CreateFileSuccessResponse = {
  files: {
    id: string
    status: 'Pending' | 'Uploaded'
  }
}

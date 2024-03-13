export const buildURL = (baseUrl: string, path: string) => {
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.substring(0, baseUrl.length - 1)
  }

  if (!path.startsWith('/')) {
    path = `/${path}`
  }

  return new URL(`${baseUrl}${path}`)
}

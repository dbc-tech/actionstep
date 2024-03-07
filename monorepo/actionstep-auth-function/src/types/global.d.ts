export {}

declare global {
  type HeadersInit =
    | Headers
    | Record<string, string>
    | Iterable<readonly [string, string]>
    | Iterable<Iterable<string>>
}

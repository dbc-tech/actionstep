export interface Paging {
  actions: {
    recordCount: number
    pageCount: number
    page: number
    pageSize: number
    prevPage: string | null
    nextPage: string | null
  }
}

export interface Debug {
  requestTime: string
  mem: string
  server: string
  cb: string
  time: string
  appload: string
  app: string
  db: string
  dbc: string
  qc: string
  uqc: string
  fc: string
  rl: null
}

export interface Meta {
  meta: {
    paging: Paging
    debug: Debug
  }
}

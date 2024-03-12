/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataCollectionRecords {
  export interface paths {
    '/datacollectionrecords': {
      /** @description Returns a collection of data collection records. */
      get: {
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['PagedDataCollectionRecords']
            }
          }
        }
      }
      /** @description Create a new data collection record. */
      post: {
        requestBody: components['requestBodies']['CreateDataCollectionRecord']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleDataCollection']
            }
          }
        }
      }
    }
    '/datacollectionrecords/{id}': {
      /** @description Returns a single data collection record. */
      get: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a data collection record.
             * @example 380
             */
            id: number
          }
        }
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleDataCollection']
            }
          }
        }
      }
      /** @description Delete a data collection record. */
      delete: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a data collection record.
             * @example 608
             */
            id: number
          }
        }
        responses: {
          /** @description Success, No Content. */
          204: {
            content: never
          }
        }
      }
    }
  }

  export type webhooks = Record<string, never>

  export interface components {
    schemas: {
      SingleDataCollection: {
        datacollectionrecords?: components['schemas']['DataCollectionRecord']
        meta?: components['schemas']['PageMetaData']
      }
      PagedDataCollectionRecords: {
        datacollectionrecords?: components['schemas']['DataCollectionRecord'][]
        meta?: components['schemas']['PageMetaData']
      }
      PageMetaData: {
        paging?: components['schemas']['PagingData']
      }
      PagingData: {
        datacollectionrecords?: components['schemas']['DataCollectionRecordsPageData']
      }
      DataCollectionRecordsPageData: {
        /**
         * @description The total number of data collection records returned by the underlying query.
         * @example 2487
         */
        recordCount?: number
        /**
         * @description The total number of pages generated by the underlying query.
         * @example 50
         */
        pageCount?: number
        /**
         * @description The page number for this page of data collection records.
         * @example 2
         */
        page?: number
        /**
         * @description Page size.
         * @example 50
         */
        pageSize?: number
        /**
         * @description A URL to the previous page of data collection records.
         * @example https://ap-southeast-2.actionstep.com/api/rest/datacollectionrecords?page=1
         */
        prevPage?: string
        /**
         * @description A URL to the next page of data collection records.
         * @example https://ap-southeast-2.actionstep.com/api/rest/datacollectionrecords?page=3
         */
        nextPage?: string
      }
      DataCollectionRecord: {
        /**
         * @description Unique identifier for the data collection record.
         * @example 4910
         */
        id?: number
        /**
         * @description Indicates if the data collection record can be written to.
         * @example F
         * @enum {string}
         */
        canWrite?: 'T' | 'F'
        /**
         * @description Indicates if the data collection record can be deleted.
         * @example F
         * @enum {string}
         */
        canDelete?: 'T' | 'F'
        links?: components['schemas']['DataCollectionRecordLinks']
      }
      DataCollectionRecordLinks: {
        /**
         * @description Unique identifier of the matter to which the data collection is associated.
         * @example 822
         */
        action?: number
        /**
         * @description Unique identifier of the data collection to which the data collection record is associated.
         * @example 50
         */
        dataCollection?: number
      }
      CreateDataCollectionRecords: {
        datacollectionrecords?: components['schemas']['CreateDataCollectionRecord']
      }
      CreateDataCollectionRecord: {
        /**
         * @description Indicates if the data collection record can be written to.
         * @example F
         * @enum {string}
         */
        canWrite?: 'T' | 'F'
        /**
         * @description Indicates if the data collection record can be deleted.
         * @example F
         * @enum {string}
         */
        canDelete?: 'T' | 'F'
        links?: components['schemas']['CreateDataCollectionRecordLinks']
      }
      CreateDataCollectionRecordLinks: {
        /**
         * @description Unique identifier of the matter to which the data collection is associated.
         * @example 822
         */
        action?: number
        /**
         * @description Unique identifier of the data collection to which the data collection record is associated.
         * @example 50
         */
        dataCollection?: number
      }
    }
    responses: never
    parameters: never
    requestBodies: {
      CreateDataCollectionRecord?: {
        content: {
          'application/json': components['schemas']['CreateDataCollectionRecords']
        }
      }
    }
    headers: never
    pathItems: never
  }

  export type $defs = Record<string, never>

  export type external = Record<string, never>

  export type operations = Record<string, never>
}
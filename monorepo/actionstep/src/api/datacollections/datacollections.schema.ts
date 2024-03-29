/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataCollections {
  export interface paths {
    '/datacollections': {
      /** @description Returns a collection of data collections. */
      get: {
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json':
                | components['schemas']['PagedDataCollections']
                | components['schemas']['SingleDataCollection']
            }
          }
        }
      }
      /** @description Create a new data collection. */
      post: {
        requestBody: components['requestBodies']['CreateDataCollection']
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
    '/datacollections/{id}': {
      /** @description Returns a single data collection. */
      get: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a data collection.
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
      /** @description Update a data collection. */
      put: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a data collection.
             * @example 608
             */
            id: number
          }
        }
        requestBody: components['requestBodies']['UpdateDataCollection']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleDataCollection']
            }
          }
        }
      }
      /** @description Delete a data collection. */
      delete: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a data collection.
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
        datacollections?: components['schemas']['DataCollection']
        meta?: components['schemas']['PageMetaData']
      }
      PagedDataCollections: {
        datacollections?: components['schemas']['DataCollection'][]
        meta?: components['schemas']['PageMetaData']
      }
      PageMetaData: {
        paging?: components['schemas']['PagingData']
      }
      PagingData: {
        datacollections?: components['schemas']['DataCollectionsPageData']
      }
      DataCollectionsPageData: {
        /**
         * @description The total number of data collections returned by the underlying query.
         * @example 2487
         */
        recordCount?: number
        /**
         * @description The total number of pages generated by the underlying query.
         * @example 50
         */
        pageCount?: number
        /**
         * @description The page number for this page of data collections.
         * @example 2
         */
        page?: number
        /**
         * @description Page size.
         * @example 50
         */
        pageSize?: number
        /**
         * @description A URL to the previous page of data collections.
         * @example https://ap-southeast-2.actionstep.com/api/rest/datacollections?page=1
         */
        prevPage?: string
        /**
         * @description A URL to the next page of data collections.
         * @example https://ap-southeast-2.actionstep.com/api/rest/datacollections?page=3
         */
        nextPage?: string
      }
      DataCollection: {
        /**
         * @description Unique identifier for the data collection.
         * @example 2347
         */
        id?: number
        /**
         * @description Name for the data collection.
         * @example AMLData
         */
        name?: string
        /**
         * @description Description for the data collection.
         * @example AML status and progress values.
         */
        description?: string
        /**
         * @description Indicates if the data collection supports multiple records of values.
         * @example F
         * @enum {string}
         */
        multipleRecords?: 'T' | 'F'
        /**
         * @description The display order compared to other data collections.
         * @example 5
         */
        order?: number
        /**
         * @description The display label for the data collection.
         * @example AML Certification
         */
        label?: string
        /**
         * @description Indicates if the data collection description should always be displayed.
         * @example F
         * @enum {string}
         */
        alwaysShowDescriptions?: 'T' | 'F'
        links?: components['schemas']['DataCollectionLinks']
      }
      DataCollectionLinks: {
        /**
         * @description Unique identifier of the matter type to which the data collection is associated.
         * @example 822
         */
        actionType?: number
      }
      CreateDataCollections: {
        datacollections?: components['schemas']['CreateDataCollection']
      }
      UpdateDataCollections: {
        datacollections?: components['schemas']['UpdateDataCollection']
      }
      CreateDataCollection: {
        /**
         * @description Name for the data collection.
         * @example AMLData
         */
        name: string
        /**
         * @description Description for the data collection.
         * @example AML status and progress values.
         */
        description: string
        /**
         * @description Indicates if the data collection supports multiple records of values.
         * @example F
         * @enum {string}
         */
        multipleRecords?: 'T' | 'F'
        /**
         * @description The display order compared to other data collections.
         * @example 5
         */
        order?: number
        /**
         * @description The display label for the data collection.
         * @example AML Certification
         */
        label?: string
        /**
         * @description Indicates if the data collection description should always be displayed.
         * @example F
         * @enum {string}
         */
        alwaysShowDescriptions?: 'T' | 'F'
        links?: components['schemas']['CreateDataCollectionLinks']
      }
      CreateDataCollectionLinks: {
        /**
         * @description Unique identifier of the matter type to which the data collection is associated.
         * @example 822
         */
        actionType: number
      }
      UpdateDataCollection: {
        /**
         * @description Name for the data collection.
         * @example AMLData
         */
        name?: string
        /**
         * @description Description for the data collection.
         * @example AML status and progress values.
         */
        description?: string
        /**
         * @description Indicates if the data collection supports multiple records of values.
         * @example F
         * @enum {string}
         */
        multipleRecords?: 'T' | 'F'
        /**
         * @description The display order compared to other data collections.
         * @example 5
         */
        order?: number
        /**
         * @description The display label for the data collection.
         * @example AML Certification
         */
        label?: string
        /**
         * @description Indicates if the data collection description should always be displayed.
         * @example F
         * @enum {string}
         */
        alwaysShowDescriptions?: 'T' | 'F'
        links?: components['schemas']['UpdateDataCollectionLinks']
      }
      UpdateDataCollectionLinks: {
        /**
         * @description Unique identifier of the matter type to which the data collection is associated.
         * @example 822
         */
        actionType?: number
      }
    }
    responses: never
    parameters: never
    requestBodies: {
      CreateDataCollection?: {
        content: {
          'application/json': components['schemas']['CreateDataCollections']
        }
      }
      UpdateDataCollection?: {
        content: {
          'application/json': components['schemas']['UpdateDataCollections']
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

/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataCollectionRecordValues {
  export interface paths {
    '/datacollectionrecordvalues': {
      /** @description Returns a collection of data collection record values. */
      get: {
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json':
                | components['schemas']['PagedDataCollectionRecordValues']
                | components['schemas']['SingleDataCollectionRecordValues']
            }
          }
        }
      }
      /** @description Create a new data collection record value. */
      post: {
        requestBody: components['requestBodies']['CreateDataCollectionRecordValue']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleDataCollectionRecordValues']
            }
          }
        }
      }
    }
    '/datacollectionrecordvalues/{id}': {
      /** @description Returns a single data collection record value. */
      get: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a data collection record value.
             * @example 380
             */
            id: string
          }
        }
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleDataCollectionRecordValues']
            }
          }
        }
      }
      /** @description Update a data collection record value. */
      put: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a data collection record value.
             * @example 608
             */
            id: string
          }
        }
        requestBody: components['requestBodies']['UpdateDataCollectionRecordValue']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleDataCollectionRecordValues']
            }
          }
        }
      }
    }
  }

  export type webhooks = Record<string, never>

  export interface components {
    schemas: {
      SingleDataCollectionRecordValues: {
        datacollectionrecordvalues?: components['schemas']['DataCollectionRecordValue']
        meta?: components['schemas']['PageMetaData']
      }
      PagedDataCollectionRecordValues: {
        datacollectionrecordvalues?: components['schemas']['DataCollectionRecordValue'][]
        meta?: components['schemas']['PageMetaData']
      }
      PageMetaData: {
        paging?: components['schemas']['PagingData']
      }
      PagingData: {
        datacollectionrecordvalues?: components['schemas']['DataCollectionRecordValuesPageData']
      }
      DataCollectionRecordValuesPageData: {
        /**
         * @description The total number of data collection record values returned by the underlying query.
         * @example 2487
         */
        recordCount?: number
        /**
         * @description The total number of pages generated by the underlying query.
         * @example 50
         */
        pageCount?: number
        /**
         * @description The page number for this page of data collection record values.
         * @example 2
         */
        page?: number
        /**
         * @description Page size.
         * @example 50
         */
        pageSize?: number
        /**
         * @description A URL to the previous page of data collection record values.
         * @example https://ap-southeast-2.actionstep.com/api/rest/datacollectionrecordvalues?page=1
         */
        prevPage?: string
        /**
         * @description A URL to the next page of data collection record values.
         * @example https://ap-southeast-2.actionstep.com/api/rest/datacollectionrecordvalues?page=3
         */
        nextPage?: string
      }
      DataCollectionRecordValue: {
        /**
         * Format: string
         * @description Unique identifier for the data collection record value. This is a composite identifier constructed from the data collection unique identifier, the data field name, and the data collection record unique identifier, all separated by a '--' delimiter.
         * @example 148--victim_age--6234
         */
        id?: string
        /**
         * Format: string
         * @description Data field value as a string.
         * @example "2023-12-25T00:00:00.000Z"
         */
        stringValue?: string
        /**
         * Format: timestamp
         * @description Date and time the data field value was last modified.
         * @example "2023-06-02T12:09:30.000Z"
         */
        last_modified_time_stamp?: string
        /**
         * @description Unique identifier for the Actionstep user who last modified the data field value.
         * @example 7837
         */
        last_modified_by_user_id?: number
        links?: components['schemas']['DataCollectionRecordValueLinks']
      }
      DataCollectionRecordValueLinks: {
        /**
         * @description Unique identifier of the matter to which the data collection field value is associated.
         * @example 500
         */
        action?: number
        /**
         * Format: string
         * @description Unique identifier for the data collection field. This is a composite unique identifier composed from the data collection unique identifier and the data field name, separated by a '--' delimiter.
         * @example 148--victim_age
         */
        dataCollectionField?: string
        /**
         * @description Unique identifier for the data record.
         * @example 6234
         */
        dataCollectionRecord?: number
        /**
         * @description Unique identifier of the data collection to which the data collection record is associated.
         * @example 148
         */
        dataCollection?: number
      }
      CreateDataCollectionRecordValues: {
        datacollectionrecordvalues?: components['schemas']['CreateDataCollectionRecordValue']
      }
      CreateDataCollectionRecordValue: {
        /**
         * Format: string
         * @description Data field value as a string.
         * @example "2023-12-25T00:00:00.000Z"
         */
        stringValue: string
        /**
         * Format: timestamp
         * @description Date and time the data field value is created.
         * @example "2023-06-02T12:09:30.000Z"
         */
        last_modified_time_stamp?: string
        /**
         * @description Unique identifier for the Actionstep user who is creating the data field value.
         * @example 7837
         */
        last_modified_by_user_id?: number
        links?: components['schemas']['CreateDataCollectionRecordValueLinks']
      }
      CreateDataCollectionRecordValueLinks: {
        /**
         * @description Unique identifier of the matter to which the data collection field value is associated.
         * @example 500
         */
        action: number
        /**
         * Format: string
         * @description Unique identifier for the data collection field. This is a composite unique identifier composed from the data collection unique identifier and the data field name, separated by a '--' delimiter.
         * @example 148--victim_age
         */
        dataCollectionField: string
        /**
         * @description Unique identifier for the data collection record.
         * @example 6234
         */
        dataCollectionRecord: number
        /**
         * @description Unique identifier of the data collection to which the data collection record is associated.
         * @example 148
         */
        dataCollection: number
      }
      UpdateDataCollectionRecordValues: {
        datacollectionrecordvalues?: components['schemas']['UpdateDataCollectionRecordValue']
      }
      UpdateDataCollectionRecordValue: {
        /**
         * Format: string
         * @description Data field value as a string.
         * @example "2023-12-25T00:00:00.000Z"
         */
        stringValue: string
        /**
         * Format: timestamp
         * @description Date and time the data field value is modified.
         * @example "2023-06-02T12:09:30.000Z"
         */
        last_modified_time_stamp?: string
        /**
         * @description Unique identifier for the Actionstep user who is modifying the data field value.
         * @example 7837
         */
        last_modified_by_user_id?: number
        links?: components['schemas']['UpdateDataCollectionRecordValueLinks']
      }
      UpdateDataCollectionRecordValueLinks: {
        /**
         * @description Unique identifier of the matter to which the data collection field value is associated.
         * @example 500
         */
        action?: number
        /**
         * Format: string
         * @description Unique identifier for the data collection field. This is a composite unique identifier composed from the data collection unique identifier and the data field name, separated by a '--' delimiter.
         * @example 148--victim_age
         */
        dataCollectionField?: string
        /**
         * @description Unique identifier for the data record.
         * @example 6234
         */
        dataCollectionRecord?: number
        /**
         * @description Unique identifier of the data collection to which the data collection record is associated.
         * @example 148
         */
        dataCollection?: number
      }
    }
    responses: never
    parameters: never
    requestBodies: {
      CreateDataCollectionRecordValue?: {
        content: {
          'application/json': components['schemas']['CreateDataCollectionRecordValues']
        }
      }
      UpdateDataCollectionRecordValue?: {
        content: {
          'application/json': components['schemas']['UpdateDataCollectionRecordValues']
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

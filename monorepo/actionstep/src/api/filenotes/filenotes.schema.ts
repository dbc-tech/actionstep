/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace FileNotes {
  export interface paths {
    '/filenotes': {
      /** @description Returns a collection of file notes. */
      get: {
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json':
                | components['schemas']['PagedFileNotes']
                | components['schemas']['SingleFileNote']
            }
          }
        }
      }
      /** @description Create a new file note. */
      post: {
        requestBody: components['requestBodies']['CreateFileNote']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleFileNote']
            }
          }
        }
      }
    }
    '/filenotes/{id}': {
      /** @description Returns a single file note. */
      get: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a file note.
             * @example 9287
             */
            id: number
          }
        }
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleFileNote']
            }
          }
        }
      }
      /** @description Update a file note. */
      put: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a file note.
             * @example 608
             */
            id: number
          }
        }
        requestBody: components['requestBodies']['UpdateFileNote']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleFileNote']
            }
          }
        }
      }
      /** @description Delete a file note. */
      delete: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a file note.
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
      SingleFileNote: {
        filenotes?: components['schemas']['FileNote']
        meta?: components['schemas']['PageMetaData']
      }
      PagedFileNotes: {
        filenotes?: components['schemas']['FileNote'][]
        meta?: components['schemas']['PageMetaData']
      }
      PageMetaData: {
        paging?: components['schemas']['PagingData']
      }
      PagingData: {
        filenotes?: components['schemas']['FileNotesPageData']
      }
      FileNotesPageData: {
        /**
         * @description The total number of file notes returned by the underlying query.
         * @example 2487
         */
        recordCount?: number
        /**
         * @description The total number of pages generated by the underlying query.
         * @example 50
         */
        pageCount?: number
        /**
         * @description The page number for this page of file notes.
         * @example 2
         */
        page?: number
        /**
         * @description Page size.
         * @example 50
         */
        pageSize?: number
        /**
         * @description A URL to the previous page of file notes.
         * @example https://ap-southeast-2.actionstep.com/api/rest/filenotes?page=1
         */
        prevPage?: string
        /**
         * @description A URL to the next page of file notes.
         * @example https://ap-southeast-2.actionstep.com/api/rest/filenotes?page=3
         */
        nextPage?: string
      }
      FileNote: {
        /**
         * @description Unique identifier for the file note.
         * @example 2347
         */
        id?: number
        /**
         * Format: timestamp
         * @description The date and time the file note is entered.
         * @example "2022-05-02T12:09:00.000Z"
         */
        enteredTimestamp?: string
        /**
         * @description Content of the file note.
         * @example Client is requesting follow up meeting this week.
         */
        text?: string
        /**
         * @description The Actionstep user who entered the file note.
         * @example Smith, John
         */
        enteredBy?: string
        /**
         * @description Indicates the source of the file note.
         * @example User
         * @enum {string}
         */
        source?: 'System' | 'User'
        /**
         * Format: timestamp
         * @description The date and time for the file note.
         * @example "2023-06-02T12:09:30.000Z"
         */
        noteTimestamp?: string
        links?: components['schemas']['FileNoteLinks']
      }
      FileNoteLinks: {
        /**
         * @description Unique identifier of the matter to which the file note is associated.
         * @example 34
         */
        action?: number
        /**
         * @description Unique identifier of a document associated to the file note.
         * @example 8376
         */
        document?: number
        /**
         * @description Unique identifier of the Actionstep user who created the file note.
         * @example 546
         */
        participant?: number
      }
      CreateFileNote: {
        /**
         * @description Content of the file note.
         * @example Client is requesting follow up meeting this week.
         */
        text: string
        /**
         * @description Indicates the source of the file note.
         * @example User
         * @enum {string}
         */
        source?: 'System' | 'User'
        /**
         * Format: timestamp
         * @description The date and time for the file note.
         * @example "2023-06-02T12:09:30.000Z"
         */
        noteTimestamp?: string
        links?: components['schemas']['CreateFileNoteLinks']
      }
      CreateFileNotes: {
        filenotes?: components['schemas']['CreateFileNote']
      }
      CreateFileNoteLinks: {
        /**
         * @description Unique identifier of the matter to which the file note is associated.
         * @example 34
         */
        action: number
        /**
         * @description Unique identifier of a document associated to the file note.
         * @example 8376
         */
        document?: number
      }
      UpdateFileNote: {
        /**
         * @description Content of the file note.
         * @example Client is requesting follow up meeting this week.
         */
        text: string
        /**
         * Format: timestamp
         * @description The date and time for the file note.
         * @example "2023-06-02T12:09:30.000Z"
         */
        noteTimestamp?: string
        links?: components['schemas']['UpdateFileNoteLinks']
      }
      UpdateFileNotes: {
        filenotes?: components['schemas']['UpdateFileNote']
      }
      UpdateFileNoteLinks: {
        /**
         * @description Unique identifier of the matter to which the file note is associated.
         * @example 34
         */
        action?: number
        /**
         * @description Unique identifier of a document associated to the file note.
         * @example 8376
         */
        document?: number
      }
    }
    responses: never
    parameters: never
    requestBodies: {
      CreateFileNote?: {
        content: {
          'application/json': components['schemas']['CreateFileNotes']
        }
      }
      UpdateFileNote?: {
        content: {
          'application/json': components['schemas']['UpdateFileNotes']
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

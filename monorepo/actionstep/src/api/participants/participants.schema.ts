/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Participants {
  export interface paths {
    '/participants': {
      /** @description Returns a collection of participants. For information on how to construct requests filtering by various properties, please refer to the API Developer Portal. */
      get: {
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['PagedParticipants']
            }
          }
        }
      }
      /** @description Create a new participant. */
      post: {
        requestBody: components['requestBodies']['CreateParticipant']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleParticipant']
            }
          }
        }
      }
    }
    '/participants/{id}': {
      /** @description Returns a single participant. */
      get: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a Participant.
             * @example 7630
             */
            id: number
          }
        }
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleParticipant']
            }
          }
        }
      }
      /** @description Updates a participant */
      put: {
        parameters: {
          path: {
            /**
             * @description Unique identifier for a participant.
             * @example 7630
             */
            id: number
          }
        }
        requestBody: components['requestBodies']['UpdateParticipant']
        responses: {
          /** @description OK. */
          200: {
            content: {
              'application/json': components['schemas']['SingleParticipant']
            }
          }
        }
      }
    }
  }

  export type webhooks = Record<string, never>

  export interface components {
    schemas: {
      SingleParticipant: {
        participants?: components['schemas']['Participant']
        meta?: components['schemas']['PageMetaData']
      }
      PagedParticipants: {
        participants?: components['schemas']['Participant'][]
        meta?: components['schemas']['PageMetaData']
      }
      PageMetaData: {
        paging?: components['schemas']['PagingData']
      }
      PagingData: {
        participants?: components['schemas']['ParticipantsPageData']
      }
      ParticipantsPageData: {
        /**
         * @description The total number of participants returned by the underlying query.
         * @example 2317
         */
        recordCount?: number
        /**
         * @description The total number of pages generated by the underlying query.
         * @example 47
         */
        pageCount?: number
        /**
         * @description The page number for this page of participants.
         * @example 2
         */
        page?: number
        /**
         * @description Page size.
         * @example 50
         */
        pageSize?: number
        /**
         * @description A URL to the previous page of participants.
         * @example https://ap-southeast-2.actionstep.com/api/rest/participants?page=1
         */
        prevPage?: string
        /**
         * @description A URL to the next page of participants.
         * @example https://ap-southeast-2.actionstep.com/api/rest/participants?page=3
         */
        nextPage?: string
      }
      Participant: {
        /**
         * @description Unique identifier for the participant.
         * @example 7939
         */
        id?: number
        /**
         * @description Display name for the participant. This is typically the first name and last name displayed in the order specified by your system's settings.
         * @example Bond, James
         */
        displayName?: string
        /**
         * @description Indicates if the participant is an individual or a company/organisation.
         * @example F
         */
        isCompany?: string
        /**
         * @description Company or organisation name.
         * @example Actionstep
         */
        companyName?: string
        /**
         * @description Salutation.
         * @example Mrs
         */
        salutation?: string
        /**
         * @description First name.
         * @example James
         */
        firstName?: string
        /**
         * @description Middle name.
         * @example Edward
         */
        middleName?: string
        /**
         * @description Last name.
         * @example Bond
         */
        lastName?: string
        /**
         * @description Name suffix.
         * @example Jnr
         */
        suffix?: string
        /**
         * @description Preferred name.
         * @example 7
         */
        preferredName?: string
        /**
         * @description First line of the physical address.
         * @example MI5 House
         */
        physicalAddressLine1?: string
        /**
         * @description Second line of the physical address.
         * @example South Bank
         */
        physicalAddressLine2?: string
        /**
         * @description City for the physical address.
         * @example London
         */
        physicalCity?: string
        /**
         * @description State or province for the physical address.
         * @example Florida
         */
        physicalStateProvince?: string
        /**
         * @description County for the physical address.
         * @example Dorset
         */
        physicalCounty?: string
        /**
         * @description Postcode or zip code for the physical address.
         * @example EC2 3YP
         */
        physicalPostCode?: string
        /**
         * @description First line of the mailing address.
         * @example 15 Wiltshire Avenue
         */
        mailingAddressLine1?: string
        /**
         * @description Second line of the mailing address.
         * @example South Park
         */
        mailingAddressLine2?: string
        /**
         * @description City for the mailing address.
         * @example Poole
         */
        mailingCity?: string
        /**
         * @description State or province for the mailing address.
         * @example New York
         */
        mailingStateProvince?: string
        /**
         * @description County for the mailing address.
         * @example Hampshire
         */
        mailingCounty?: string
        /**
         * @description Postcode or zip code for the mailing address.
         * @example BH18 8EJ
         */
        mailingPostCode?: string
        /**
         * @description Label for the first telephone number.
         * @example Home
         */
        phone1Label?: string
        /**
         * @description ISO country code for the first telephone number.
         * @example 44
         */
        phone1Country?: number
        /**
         * @description Area number for the first telephone number.
         * @example 202
         */
        phone1Area?: number
        /**
         * @description Local part of the first telephone number.
         * @example 7379 939
         */
        phone1Number?: string
        /**
         * @description Optional notes for the first telephone number.
         * @example null
         */
        phone1Notes?: string
        /**
         * @description Label for the second telephone number.
         * @example Office
         */
        phone2Label?: string
        /**
         * @description ISO country code for the second telephone number.
         * @example 44
         */
        phone2Country?: number
        /**
         * @description Area number for the second telephone number.
         * @example 202
         */
        phone2Area?: number
        /**
         * @description Local part of the second telephone number.
         * @example 6893 378
         */
        phone2Number?: string
        /**
         * @description Optional notes for the second telephone number.
         * @example null
         */
        phone2Notes?: string
        /**
         * @description Label for the third telephone number.
         * @example Mobile
         */
        phone3Label?: string
        /**
         * @description ISO country code for the third telephone number.
         * @example 44
         */
        phone3Country?: number
        /**
         * @description Area number for the third telephone number.
         * @example 204
         */
        phone3Area?: number
        /**
         * @description Local part of the third telephone number.
         * @example 0279 6394
         */
        phone3Number?: string
        /**
         * @description Optional notes for the third telephone number.
         * @example null
         */
        phone3Notes?: string
        /**
         * @description Label for the fourth telephone number.
         * @example Holiday home
         */
        phone4Label?: string
        /**
         * @description ISO country code for the fourth telephone number.
         * @example 44
         */
        phone4Country?: number
        /**
         * @description Area number for the fourth telephone number.
         * @example 393
         */
        phone4Area?: number
        /**
         * @description Local part of the fourth telephone number.
         * @example 0921 832
         */
        phone4Number?: string
        /**
         * @description Optional notes for the fourth telephone number.
         * @example Only during summer months.
         */
        phone4Notes?: string
        /**
         * @description Fax number.
         * @example 202 3782 838
         */
        fax?: string
        /**
         * @description Number for SMS messaging.
         * @example 93 382 2223
         */
        sms?: string
        /**
         * @description Email address.
         * @example james.bond@mi5.co.uk
         */
        email?: string
        /**
         * @description Website address (Url).
         * @example www.myorganisation.com
         */
        website?: string
        /**
         * @description Occupation.
         * @example Dentist
         */
        occupation?: string
        /**
         * @description Tax number.
         * @example NH838-23M
         */
        taxNumber?: string
        /**
         * Format: date
         * @description Date of birth.
         * @example 23-May-1987
         */
        birthTimestamp?: string
        /**
         * Format: date
         * @description Date of death.
         * @example 09-Dec-2020
         */
        deathTimestamp?: string
        /**
         * @description Marital status.
         * @example Married
         */
        maritalStatus?: string
        /**
         * @description Gender.
         * @example M
         * @enum {string}
         */
        gender?: 'M' | 'F'
        /**
         * @description Gender type name.
         * @example Transgender
         */
        genderTypeName?: string
        /**
         * @description Indicates if dead.
         * @example F
         * @enum {string}
         */
        isDeceased?: 'T' | 'F'
        /**
         * @description Status for date of birth.
         * @default Known
         * @example Known
         * @enum {string}
         */
        dateOfBirthStatus?: 'Known' | 'Estimate' | 'Not stated' | 'Unknown'
        /**
         * @description 2 character ISO country code.
         * @example NZ
         */
        countryIdOfBirth?: string
        /**
         * Format: timestamp
         * @description Date and time of last modification.
         * @example "2023-11-08T04:17:29.000Z"
         */
        modifiedTimestamp?: string
        /**
         * Format: timestamp
         * @description Date and time of record creation.
         * @example "2019-11-05T01:23:48.000Z"
         */
        createdTimestamp?: string
        /**
         * @description Current AML status.
         * @default Not started
         * @example In progress
         * @enum {string}
         */
        amlStatus?: 'Not started' | 'In progress' | 'Signed off'
        /**
         * @description Progress of the AML process expressed as a percentage.
         * @default 0
         * @example 75
         */
        amlProgress?: number
        /**
         * @description AML risk profile.
         * @default Unknown
         * @example Medium
         * @enum {string}
         */
        amlRisk?: 'Low' | 'Medium' | 'High' | 'Unknown'
        /**
         * @description AML notes.
         * @example Successfully processed.
         */
        amlNote?: string
        /**
         * @description Used when importing data into Actionstep from a third-party data source.
         * @example DDH-3838939-333
         */
        importExternalReference?: string
        links?: components['schemas']['ParticipantLinks']
      }
      ParticipantLinks: {
        /**
         * @description The 2 character ISO code for the country.
         * @example NZ
         */
        physicalCountry?: string
        /**
         * @description The 2 character ISO code for the mailing country.
         * @example NZ
         */
        mailingCountry?: string
        /**
         * @description Unique identifier of the division to which the participant is associated.
         * @example 1
         */
        division?: number
      }
      CreateParticipants: {
        participants?: components['schemas']['CreateParticipant']
      }
      UpdateParticipants: {
        participants?: components['schemas']['UpdateParticipant']
      }
      CreateParticipant: {
        /**
         * @description Indicates if the participant is an individual or a company/organisation.
         * @example F
         */
        isCompany?: 'T' | 'F'
        /**
         * @description Company or organisation name.
         * @example Actionstep
         */
        companyName?: string
        /**
         * @description Salutation.
         * @example Mrs
         */
        salutation?: string
        /**
         * @description First name.
         * @example James
         */
        firstName?: string
        /**
         * @description Middle name.
         * @example Edward
         */
        middleName?: string
        /**
         * @description Last name.
         * @example Bond
         */
        lastName?: string
        /**
         * @description Name suffix.
         * @example Jnr
         */
        suffix?: string
        /**
         * @description Preferred name.
         * @example 7
         */
        preferredName?: string
        /**
         * @description First line of the physical address.
         * @example MI5 House
         */
        physicalAddressLine1?: string
        /**
         * @description Second line of the physical address.
         * @example South Bank
         */
        physicalAddressLine2?: string
        /**
         * @description City for the physical address.
         * @example London
         */
        physicalCity?: string
        /**
         * @description State or province for the physical address.
         * @example Florida
         */
        physicalStateProvince?: string
        /**
         * @description County for the physical address.
         * @example Dorset
         */
        physicalCounty?: string
        /**
         * @description Postcode or zip code for the physical address.
         * @example EC2 3YP
         */
        physicalPostCode?: string
        /**
         * @description First line of the mailing address.
         * @example 15 Wiltshire Avenue
         */
        mailingAddressLine1?: string
        /**
         * @description Second line of the mailing address.
         * @example South Park
         */
        mailingAddressLine2?: string
        /**
         * @description City for the mailing address.
         * @example Poole
         */
        mailingCity?: string
        /**
         * @description State or province for the mailing address.
         * @example New York
         */
        mailingStateProvince?: string
        /**
         * @description County for the mailing address.
         * @example Hampshire
         */
        mailingCounty?: string
        /**
         * @description Postcode or zip code for the mailing address.
         * @example BH18 8EJ
         */
        mailingPostCode?: string
        /**
         * @description Label for the first telephone number.
         * @example Home
         */
        phone1Label?: string
        /**
         * @description ISO country code for the first telephone number.
         * @example 44
         */
        phone1Country?: number
        /**
         * @description Area number for the first telephone number.
         * @example 202
         */
        phone1Area?: number
        /**
         * @description Local part of the first telephone number.
         * @example 7379 939
         */
        phone1Number?: string
        /**
         * @description Optional notes for the first telephone number.
         * @example null
         */
        phone1Notes?: string
        /**
         * @description Label for the second telephone number.
         * @example Office
         */
        phone2Label?: string
        /**
         * @description ISO country code for the second telephone number.
         * @example 44
         */
        phone2Country?: number
        /**
         * @description Area number for the second telephone number.
         * @example 202
         */
        phone2Area?: number
        /**
         * @description Local part of the second telephone number.
         * @example 6893 378
         */
        phone2Number?: string
        /**
         * @description Optional notes for the second telephone number.
         * @example null
         */
        phone2Notes?: string
        /**
         * @description Label for the third telephone number.
         * @example Mobile
         */
        phone3Label?: string
        /**
         * @description ISO country code for the third telephone number.
         * @example 44
         */
        phone3Country?: number
        /**
         * @description Area number for the third telephone number.
         * @example 204
         */
        phone3Area?: number
        /**
         * @description Local part of the third telephone number.
         * @example 0279 6394
         */
        phone3Number?: string
        /**
         * @description Optional notes for the third telephone number.
         * @example null
         */
        phone3Notes?: string
        /**
         * @description Label for the fourth telephone number.
         * @example Holiday home
         */
        phone4Label?: string
        /**
         * @description ISO country code for the fourth telephone number.
         * @example 44
         */
        phone4Country?: number
        /**
         * @description Area number for the fourth telephone number.
         * @example 393
         */
        phone4Area?: number
        /**
         * @description Local part of the fourth telephone number.
         * @example 0921 832
         */
        phone4Number?: string
        /**
         * @description Optional notes for the fourth telephone number.
         * @example Only during summer months.
         */
        phone4Notes?: string
        /**
         * @description Fax number.
         * @example 202 3782 838
         */
        fax?: string
        /**
         * @description Number for SMS messaging.
         * @example 93 382 2223
         */
        sms?: string
        /**
         * @description Email address.
         * @example james.bond@mi5.co.uk
         */
        email?: string
        /**
         * @description Website address (Url).
         * @example www.myorganisation.com
         */
        website?: string
        /**
         * @description Occupation.
         * @example Dentist
         */
        occupation?: string
        /**
         * @description Tax number.
         * @example NH838-23M
         */
        taxNumber?: string
        /**
         * Format: date
         * @description Date of birth.
         * @example 23-May-1987
         */
        birthTimestamp?: string
        /**
         * Format: date
         * @description Date of death.
         * @example 09-Dec-2020
         */
        deathTimestamp?: string
        /**
         * @description Marital status.
         * @example Married
         */
        maritalStatus?: string
        /**
         * @description Gender.
         * @example M
         * @enum {string}
         */
        gender?: 'M' | 'F'
        /**
         * @description Gender type name.
         * @example Transgender
         */
        genderTypeName?: string
        /**
         * @description Indicates if dead.
         * @example F
         * @enum {string}
         */
        isDeceased?: 'T' | 'F'
        /**
         * @description Status for date of birth.
         * @default Known
         * @example Known
         * @enum {string}
         */
        dateOfBirthStatus?: 'Known' | 'Estimate' | 'Not stated' | 'Unknown'
        /**
         * @description 2 character ISO country code.
         * @example NZ
         */
        countryIdOfBirth?: string
        /**
         * Format: timestamp
         * @description Date and time of last modification.
         * @example "2023-11-08T04:17:29.000Z"
         */
        modifiedTimestamp?: string
        /**
         * Format: timestamp
         * @description Date and time of record creation.
         * @example "2019-11-05T01:23:48.000Z"
         */
        createdTimestamp?: string
        /**
         * @description Current AML status.
         * @default Not started
         * @example In progress
         * @enum {string}
         */
        amlStatus?: 'Not started' | 'In progress' | 'Signed off'
        /**
         * @description Progress of the AML process expressed as a percentage.
         * @default 0
         * @example 75
         */
        amlProgress?: number
        /**
         * @description AML risk profile.
         * @default Unknown
         * @example Medium
         * @enum {string}
         */
        amlRisk?: 'Low' | 'Medium' | 'High' | 'Unknown'
        /**
         * @description AML notes.
         * @example Successfully processed.
         */
        amlNote?: string
        /**
         * @description Used when importing data into Actionstep from a third-party data source.
         * @example DDH-3838939-333
         */
        importExternalReference?: string
        links?: components['schemas']['CreateParticipantsLinks']
      }
      CreateParticipantsLinks: {
        /**
         * @description The 2 character ISO code for the country.
         * @example NZ
         */
        physicalCountry?: string
        /**
         * @description The 2 character ISO code for the mailing country.
         * @example NZ
         */
        mailingCountry?: string
        /**
         * @description Unique identifier of the division to which the participant is associated.
         * @example 1
         */
        division?: number
      }
      UpdateParticipant: {
        /**
         * @description Indicates if the participant is an individual or a company/organisation.
         * @example F
         */
        isCompany?: 'T' | 'F'
        /**
         * @description Company or organisation name.
         * @example Actionstep
         */
        companyName?: string
        /**
         * @description Salutation.
         * @example Mrs
         */
        salutation?: string
        /**
         * @description First name.
         * @example James
         */
        firstName?: string
        /**
         * @description Middle name.
         * @example Edward
         */
        middleName?: string
        /**
         * @description Last name.
         * @example Bond
         */
        lastName?: string
        /**
         * @description Name suffix.
         * @example Jnr
         */
        suffix?: string
        /**
         * @description Preferred name.
         * @example 7
         */
        preferredName?: string
        /**
         * @description First line of the physical address.
         * @example MI5 House
         */
        physicalAddressLine1?: string
        /**
         * @description Second line of the physical address.
         * @example South Bank
         */
        physicalAddressLine2?: string
        /**
         * @description City for the physical address.
         * @example London
         */
        physicalCity?: string
        /**
         * @description State or province for the physical address.
         * @example Florida
         */
        physicalStateProvince?: string
        /**
         * @description County for the physical address.
         * @example Dorset
         */
        physicalCounty?: string
        /**
         * @description Postcode or zip code for the physical address.
         * @example EC2 3YP
         */
        physicalPostCode?: string
        /**
         * @description First line of the mailing address.
         * @example 15 Wiltshire Avenue
         */
        mailingAddressLine1?: string
        /**
         * @description Second line of the mailing address.
         * @example South Park
         */
        mailingAddressLine2?: string
        /**
         * @description City for the mailing address.
         * @example Poole
         */
        mailingCity?: string
        /**
         * @description State or province for the mailing address.
         * @example New York
         */
        mailingStateProvince?: string
        /**
         * @description County for the mailing address.
         * @example Hampshire
         */
        mailingCounty?: string
        /**
         * @description Postcode or zip code for the mailing address.
         * @example BH18 8EJ
         */
        mailingPostCode?: string
        /**
         * @description Label for the first telephone number.
         * @example Home
         */
        phone1Label?: string
        /**
         * @description ISO country code for the first telephone number.
         * @example 44
         */
        phone1Country?: number
        /**
         * @description Area number for the first telephone number.
         * @example 202
         */
        phone1Area?: number
        /**
         * @description Local part of the first telephone number.
         * @example 7379 939
         */
        phone1Number?: string
        /**
         * @description Optional notes for the first telephone number.
         * @example null
         */
        phone1Notes?: string
        /**
         * @description Label for the second telephone number.
         * @example Office
         */
        phone2Label?: string
        /**
         * @description ISO country code for the second telephone number.
         * @example 44
         */
        phone2Country?: number
        /**
         * @description Area number for the second telephone number.
         * @example 202
         */
        phone2Area?: number
        /**
         * @description Local part of the second telephone number.
         * @example 6893 378
         */
        phone2Number?: string
        /**
         * @description Optional notes for the second telephone number.
         * @example null
         */
        phone2Notes?: string
        /**
         * @description Label for the third telephone number.
         * @example Mobile
         */
        phone3Label?: string
        /**
         * @description ISO country code for the third telephone number.
         * @example 44
         */
        phone3Country?: number
        /**
         * @description Area number for the third telephone number.
         * @example 204
         */
        phone3Area?: number
        /**
         * @description Local part of the third telephone number.
         * @example 0279 6394
         */
        phone3Number?: string
        /**
         * @description Optional notes for the third telephone number.
         * @example null
         */
        phone3Notes?: string
        /**
         * @description Label for the fourth telephone number.
         * @example Holiday home
         */
        phone4Label?: string
        /**
         * @description ISO country code for the fourth telephone number.
         * @example 44
         */
        phone4Country?: number
        /**
         * @description Area number for the fourth telephone number.
         * @example 393
         */
        phone4Area?: number
        /**
         * @description Local part of the fourth telephone number.
         * @example 0921 832
         */
        phone4Number?: string
        /**
         * @description Optional notes for the fourth telephone number.
         * @example Only during summer months.
         */
        phone4Notes?: string
        /**
         * @description Fax number.
         * @example 202 3782 838
         */
        fax?: string
        /**
         * @description Number for SMS messaging.
         * @example 93 382 2223
         */
        sms?: string
        /**
         * @description Email address.
         * @example james.bond@mi5.co.uk
         */
        email?: string
        /**
         * @description Website address (Url).
         * @example www.myorganisation.com
         */
        website?: string
        /**
         * @description Occupation.
         * @example Dentist
         */
        occupation?: string
        /**
         * @description Tax number.
         * @example NH838-23M
         */
        taxNumber?: string
        /**
         * Format: date
         * @description Date of birth.
         * @example 23-May-1987
         */
        birthTimestamp?: string
        /**
         * Format: date
         * @description Date of death.
         * @example 09-Dec-2020
         */
        deathTimestamp?: string
        /**
         * @description Marital status.
         * @example Married
         */
        maritalStatus?: string
        /**
         * @description Gender.
         * @example M
         * @enum {string}
         */
        gender?: 'M' | 'F'
        /**
         * @description Gender type name.
         * @example Transgender
         */
        genderTypeName?: string
        /**
         * @description Indicates if dead.
         * @example F
         * @enum {string}
         */
        isDeceased?: 'T' | 'F'
        /**
         * @description Status for date of birth.
         * @default Known
         * @example Known
         * @enum {string}
         */
        dateOfBirthStatus?: 'Known' | 'Estimate' | 'Not stated' | 'Unknown'
        /**
         * @description 2 character ISO country code.
         * @example NZ
         */
        countryIdOfBirth?: string
        /**
         * Format: timestamp
         * @description Date and time of last modification.
         * @example "2023-11-08T04:17:29.000Z"
         */
        modifiedTimestamp?: string
        /**
         * Format: timestamp
         * @description Date and time of record creation.
         * @example "2019-11-05T01:23:48.000Z"
         */
        createdTimestamp?: string
        /**
         * @description Current AML status.
         * @default Not started
         * @example In progress
         * @enum {string}
         */
        amlStatus?: 'Not started' | 'In progress' | 'Signed off'
        /**
         * @description Progress of the AML process expressed as a percentage.
         * @default 0
         * @example 75
         */
        amlProgress?: number
        /**
         * @description AML risk profile.
         * @default Unknown
         * @example Medium
         * @enum {string}
         */
        amlRisk?: 'Low' | 'Medium' | 'High' | 'Unknown'
        /**
         * @description AML notes.
         * @example Successfully processed.
         */
        amlNote?: string
        /**
         * @description Used when importing data into Actionstep from a third-party data source.
         * @example DDH-3838939-333
         */
        importExternalReference?: string
        links?: components['schemas']['UpdateParticipantsLinks']
      }
      UpdateParticipantsLinks: {
        /**
         * @description The 2 character ISO code for the country.
         * @example NZ
         */
        physicalCountry?: string
        /**
         * @description The 2 character ISO code for the mailing country.
         * @example NZ
         */
        mailingCountry?: string
        /**
         * @description Unique identifier of the division to which the participant is associated.
         * @example 1
         */
        division?: number
      }
    }
    responses: never
    parameters: never
    requestBodies: {
      CreateParticipant?: {
        content: {
          'application/json': components['schemas']['CreateParticipants']
        }
      }
      UpdateParticipant?: {
        content: {
          'application/json': components['schemas']['UpdateParticipants']
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
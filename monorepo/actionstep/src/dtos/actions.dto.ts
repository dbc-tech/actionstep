import { Meta } from './meta.dto'

export interface Link {
  href: string
  type: string
}

export interface Links {
  'actions.assignedTo': Link
  'actions.division': Link
  'actions.actionType': Link
  'actions.primaryParticipants': Link
  'actions.step': Link
  'actions.billSettings': Link
  'actions.relatedActions': Link
}

export interface Actions {
  id: number
  name: string
  reference: string | null
  priority: number
  status: string
  statusTimestamp: string
  isBillableOverride: string | null
  createdTimestamp: string
  modifiedTimestamp: string
  isDeleted: string
  deletedBy: string | null
  deletedTimestamp: string | null
  isFavorite: string
  overrideBillingStatus: string | null
  lastAccessTimestamp: string | null
  importExternalReference: string | null
  amlReviewStatus: string
  links: {
    assignedTo: string
    division: string
    actionType: string
    primaryParticipants: string[]
    step: string
    billSettings: string
    relatedActions: string[]
  }
}

export interface ActionStepData extends Meta {
  links: Links
  actions: Actions
}

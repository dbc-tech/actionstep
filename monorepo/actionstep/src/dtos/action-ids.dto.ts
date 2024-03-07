import { Id } from './id.dto'
import { Meta } from './meta.dto'

export interface ActionIds extends Meta {
  actions: Id[]
}

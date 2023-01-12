import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { isEqualByDC } from 'libs/utils/lodash'
import { BlockNumberSchema } from '../../../models/BlockNumber'
import { TransactionHashSchema } from './TransactionHash'

/**
 * TODO: finish the schema
 */
export const EventSchema = z.object({
  blockNumber: BlockNumberSchema,
  transactionHash: TransactionHashSchema,
}).describe('Event')

/**
 * TODO: Do events have uids?
 */
export const EventUidSchema = EventSchema

export const EventsSchema = getArraySchema(EventSchema, parseEventUid)

export type Event = z.infer<typeof EventSchema>

export type EventUid = z.infer<typeof EventUidSchema>

export function parseEvent(event: Event): Event {
  return EventSchema.parse(event)
}

export function parseEvents(events: Event[]): Event[] {
  return EventsSchema.parse(events)
}

export function parseEventUid(eventUid: EventUid): EventUid {
  return EventUidSchema.parse(eventUid)
}

export const isEqualEvent = isEqualByDC(parseEventUid)

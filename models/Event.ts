import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { isEqualByD, isEqualByDC } from 'libs/utils/lodash'
import { BlockNumberSchema } from './BlockNumber'
import { TransactionHashSchema } from './TransactionHash'
import { NaturalNumberSchema } from '../../generic/models/NaturalNumber'
import { BlockHashSchema } from './BlockHash'
import { ChainIdSchema } from './ChainId'

/**
 * IMPORTANT: always filter by `removed` field before consuming the log array
 */
export const EventSchema = z.object({
  chainId: ChainIdSchema,
  blockHash: BlockHashSchema,
  blockNumber: BlockNumberSchema,
  transactionHash: TransactionHashSchema,
  transactionIndex: NaturalNumberSchema, // within a block
  logIndex: NaturalNumberSchema, // within a block
  removed: z.boolean(), // a log may be removed due to a chain reorg
}).describe('Event')

export const EventUidSchema = EventSchema.pick({
  blockHash: true, // use blockHash instead of blockNumber to ensure events are unique across chain reorgs (same blockNumber but different blockHash)
  transactionHash: true,
  logIndex: true, // use logIndex to separate events with the same signature within a single transaction
})

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

export function fromEventUidToString({ blockHash, transactionHash, logIndex }: EventUid) {
  return `${blockHash}-${transactionHash}-${logIndex}`
}

export const isEqualEvent = isEqualByDC(parseEventUid)

export const isEqualEventS = (a: Event, b: Event) => isEqualByD(a, b, parseEventUid)

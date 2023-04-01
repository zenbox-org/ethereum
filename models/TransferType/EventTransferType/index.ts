import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'

export const EventTransferTypeSchema = z.object({
  type: z.literal('Event'),
  name: z.string(),
}).describe('EventTransferType')

export const EventTransferTypeUidSchema = EventTransferTypeSchema.pick({

})

export const EventTransferTypesSchema = getArraySchema(EventTransferTypeSchema, parseEventTransferTypeUid)

export type EventTransferType = z.infer<typeof EventTransferTypeSchema>

export type EventTransferTypeUid = z.infer<typeof EventTransferTypeUidSchema>

export function parseEventTransferType(type: EventTransferType): EventTransferType {
  return EventTransferTypeSchema.parse(type)
}

export function parseEventTransferTypes(types: EventTransferType[]): EventTransferType[] {
  return EventTransferTypesSchema.parse(types)
}

export function parseEventTransferTypeUid(typeUid: EventTransferTypeUid): EventTransferTypeUid {
  return EventTransferTypeUidSchema.parse(typeUid)
}

export const isEqualEventTransferType = isEqualByDC(parseEventTransferTypeUid)

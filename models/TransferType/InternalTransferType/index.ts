import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'

export const InternalTransferTypeSchema = z.object({
  type: z.literal('Internal'),
}).describe('InternalTransferType')

export const InternalTransferTypeUidSchema = InternalTransferTypeSchema.pick({

})

export const InternalTransferTypesSchema = getArraySchema(InternalTransferTypeSchema, parseInternalTransferTypeUid)

export type InternalTransferType = z.infer<typeof InternalTransferTypeSchema>

export type InternalTransferTypeUid = z.infer<typeof InternalTransferTypeUidSchema>

export function parseInternalTransferType(type: InternalTransferType): InternalTransferType {
  return InternalTransferTypeSchema.parse(type)
}

export function parseInternalTransferTypes(types: InternalTransferType[]): InternalTransferType[] {
  return InternalTransferTypesSchema.parse(types)
}

export function parseInternalTransferTypeUid(typeUid: InternalTransferTypeUid): InternalTransferTypeUid {
  return InternalTransferTypeUidSchema.parse(typeUid)
}

export const isEqualInternalTransferType = isEqualByDC(parseInternalTransferTypeUid)

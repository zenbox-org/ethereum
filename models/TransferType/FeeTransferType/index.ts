import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'

export const FeeTransferTypeSchema = z.object({
  type: z.literal('Fee'),
}).describe('FeeTransferType')

export const FeeTransferTypeUidSchema = FeeTransferTypeSchema.pick({

})

export const FeeTransferTypesSchema = getArraySchema(FeeTransferTypeSchema, parseFeeTransferTypeUid)

export type FeeTransferType = z.infer<typeof FeeTransferTypeSchema>

export type FeeTransferTypeUid = z.infer<typeof FeeTransferTypeUidSchema>

export function parseFeeTransferType(type: FeeTransferType): FeeTransferType {
  return FeeTransferTypeSchema.parse(type)
}

export function parseFeeTransferTypes(types: FeeTransferType[]): FeeTransferType[] {
  return FeeTransferTypesSchema.parse(types)
}

export function parseFeeTransferTypeUid(typeUid: FeeTransferTypeUid): FeeTransferTypeUid {
  return FeeTransferTypeUidSchema.parse(typeUid)
}

export const isEqualFeeTransferType = isEqualByDC(parseFeeTransferTypeUid)

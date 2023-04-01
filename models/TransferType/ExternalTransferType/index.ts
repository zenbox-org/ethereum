import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'

export const ExternalTransferTypeSchema = z.object({
  type: z.literal('External'),
}).describe('ExternalTransferType')

export const ExternalTransferTypeUidSchema = ExternalTransferTypeSchema.pick({

})

export const ExternalTransferTypesSchema = getArraySchema(ExternalTransferTypeSchema, parseExternalTransferTypeUid)

export type ExternalTransferType = z.infer<typeof ExternalTransferTypeSchema>

export type ExternalTransferTypeUid = z.infer<typeof ExternalTransferTypeUidSchema>

export function parseExternalTransferType(type: ExternalTransferType): ExternalTransferType {
  return ExternalTransferTypeSchema.parse(type)
}

export function parseExternalTransferTypes(types: ExternalTransferType[]): ExternalTransferType[] {
  return ExternalTransferTypesSchema.parse(types)
}

export function parseExternalTransferTypeUid(typeUid: ExternalTransferTypeUid): ExternalTransferTypeUid {
  return ExternalTransferTypeUidSchema.parse(typeUid)
}

export const isEqualExternalTransferType = isEqualByDC(parseExternalTransferTypeUid)

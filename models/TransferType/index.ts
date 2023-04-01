import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { EventTransferTypeSchema } from './EventTransferType'
import { ExternalTransferTypeSchema } from './ExternalTransferType'
import { FeeTransferTypeSchema } from './FeeTransferType'
import { InternalTransferTypeSchema } from './InternalTransferType'

export const TransferTypeSchema = z.discriminatedUnion('type', [
  ExternalTransferTypeSchema, // happened during a regular call (tx.value)
  InternalTransferTypeSchema, // happened during the execution of a contract function
  FeeTransferTypeSchema, // went to the validators
  EventTransferTypeSchema, // happened during the execution of a contract function
]).describe('TransferType')

export const TransferTypeUidSchema = TransferTypeSchema

export const TransferTypesSchema = getArraySchema(TransferTypeSchema, parseTransferTypeUid)

export type TransferType = z.infer<typeof TransferTypeSchema>

export type TransferTypeUid = z.infer<typeof TransferTypeUidSchema>

export function parseTransferType(type: TransferType): TransferType {
  return TransferTypeSchema.parse(type)
}

export function parseTransferTypes(types: TransferType[]): TransferType[] {
  return TransferTypesSchema.parse(types)
}

export function parseTransferTypeUid(typeUid: TransferTypeUid): TransferTypeUid {
  return TransferTypeUidSchema.parse(typeUid)
}

export const isEqualTransferType = isEqualByDC(parseTransferTypeUid)

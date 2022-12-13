import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { BN } from '../../bn'
import { isEqualBN } from '../../bn/utils'

export const AmountSignedBNSchema = z.instanceof(BN).describe('AmountSignedBN')

export const AmountSignedBNUidSchema = AmountSignedBNSchema

export const AmountSignedBNsSchema = getArraySchema(AmountSignedBNSchema, parseAmountSignedBNUid)

export type AmountSignedBN = z.infer<typeof AmountSignedBNSchema>

export type AmountSignedBNUid = z.infer<typeof AmountSignedBNUidSchema>

export function parseAmountSignedBN(amount: AmountSignedBN): AmountSignedBN {
  return AmountSignedBNSchema.parse(amount)
}

export function parseAmountSignedBNs(amounts: AmountSignedBN[]): AmountSignedBN[] {
  return AmountSignedBNsSchema.parse(amounts)
}

export function parseAmountSignedBNUid(amountUid: AmountSignedBNUid): AmountSignedBNUid {
  return AmountSignedBNUidSchema.parse(amountUid)
}

export const isEqualAmountSignedBN = isEqualBN

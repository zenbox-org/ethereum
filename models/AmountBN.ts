import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { BN } from '../../bn'
import { isEqualBN } from '../../bn/utils'

export const AmountBNSchema = z.instanceof(BN)
  .refine(n => !n.isNegative(), 'Must be greater or equal to 0')
  .describe('Amount')

export const AmountBNUidSchema = AmountBNSchema

export const AmountBNsSchema = getArraySchema(AmountBNSchema, parseAmountBNUid)

export type AmountBN = z.infer<typeof AmountBNSchema>

export type AmountBNUid = z.infer<typeof AmountBNUidSchema>

export function parseAmountBN(amount: AmountBN): AmountBN {
  return AmountBNSchema.parse(amount)
}

export function parseAmountBNs(amounts: AmountBN[]): AmountBN[] {
  return AmountBNsSchema.parse(amounts)
}

export function parseAmountBNUid(amountUid: AmountBNUid): AmountBNUid {
  return AmountBNUidSchema.parse(amountUid)
}

export const isEqualAmountBN = isEqualBN

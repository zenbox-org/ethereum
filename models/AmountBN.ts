import { z } from 'zod'
import { getArraySchema } from 'zenbox-util/zod'
import { BN } from '../../bn'

export const AmountBNSchema = z.instanceof(BN)
  .refine(n => !n.isNegative())
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

export const isEqualAmountBN = (a: AmountBN) => (b: AmountBN) => a.eq(b)

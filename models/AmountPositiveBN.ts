import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { BN } from '../../bn'
import { isEqualBN } from '../../bn/utils'

export const AmountPositiveBNSchema = z.instanceof(BN)
  .refine(n => !(n.isNegative() || n.isZero()))
  .describe('AmountPositiveBN')

export const AmountPositiveBNUidSchema = AmountPositiveBNSchema

export const AmountPositiveBNsSchema = getArraySchema(AmountPositiveBNSchema, parseAmountPositiveBNUid)

export type AmountPositiveBN = z.infer<typeof AmountPositiveBNSchema>

export type AmountPositiveBNUid = z.infer<typeof AmountPositiveBNUidSchema>

export function parseAmountPositiveBN(amount: AmountPositiveBN): AmountPositiveBN {
  return AmountPositiveBNSchema.parse(amount)
}

export function parseAmountPositiveBNs(amounts: AmountPositiveBN[]): AmountPositiveBN[] {
  return AmountPositiveBNsSchema.parse(amounts)
}

export function parseAmountPositiveBNUid(amountUid: AmountPositiveBNUid): AmountPositiveBNUid {
  return AmountPositiveBNUidSchema.parse(amountUid)
}

export const isEqualAmountPositiveBN = isEqualBN

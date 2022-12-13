import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { BN } from '../../bn'
import { isEqualBN } from '../../bn/utils'
import { MaxUint256 } from '../constants'

export const AmountUint256BNSchema = z.instanceof(BN)
  .refine(n => !n.isNegative())
  .refine(n => n.lte(MaxUint256))
  .describe('AmountUint256BN')

export const AmountUint256BNUidSchema = AmountUint256BNSchema

export const AmountUint256BNsSchema = getArraySchema(AmountUint256BNSchema, parseAmountUint256BNUid)

export type AmountUint256BN = z.infer<typeof AmountUint256BNSchema>

export type AmountUint256BNUid = z.infer<typeof AmountUint256BNUidSchema>

export function parseAmountUint256BN(amount: AmountUint256BN): AmountUint256BN {
  return AmountUint256BNSchema.parse(amount)
}

export function parseAmountUint256BNs(amounts: AmountUint256BN[]): AmountUint256BN[] {
  return AmountUint256BNsSchema.parse(amounts)
}

export function parseAmountUint256BNUid(amountUid: AmountUint256BNUid): AmountUint256BNUid {
  return AmountUint256BNUidSchema.parse(amountUid)
}

export const isEqualAmountUint256BN = isEqualBN

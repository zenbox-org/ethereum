import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { BN } from '../../bn'
import { isEqualBN } from '../../bn/utils'
import { uint256Max } from '../../bn/constants'

export const AmountPositiveUint256BNSchema = z.instanceof(BN)
  .refine(n => n.gt(0), 'Must be greater than 0')
  .refine(n => n.lte(uint256Max), 'Must be less or equal to max uint256')
  .describe('AmountUint256BN')

export const AmountPositiveUint256BNUidSchema = AmountPositiveUint256BNSchema

export const AmountPositiveUint256BNsSchema = getArraySchema(AmountPositiveUint256BNSchema, parseAmountPositiveUint256BNUid)

export type AmountPositiveUint256BN = z.infer<typeof AmountPositiveUint256BNSchema>

export type AmountPositiveUint256BNUid = z.infer<typeof AmountPositiveUint256BNUidSchema>

export function parseAmountPositiveUint256BN(amount: AmountPositiveUint256BN): AmountPositiveUint256BN {
  return AmountPositiveUint256BNSchema.parse(amount)
}

export function parseAmountPositiveUint256BNs(amounts: AmountPositiveUint256BN[]): AmountPositiveUint256BN[] {
  return AmountPositiveUint256BNsSchema.parse(amounts)
}

export function parseAmountPositiveUint256BNUid(amountUid: AmountPositiveUint256BNUid): AmountPositiveUint256BNUid {
  return AmountPositiveUint256BNUidSchema.parse(amountUid)
}

export const isEqualAmountPositiveUint256BN = isEqualBN

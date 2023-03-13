import { bigint, z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { eq } from 'libs/utils/lodash'
import { uint256Max } from '../../../bn/constants'

export const AmountPositiveUint256BigIntSchema = bigint()
  .refine(n => n > 0n, 'Must be greater than 0')
  .refine(n => n <= uint256Max.toBigInt(), 'Must be less or equal to max uint256')
  .describe('AmountPositiveUint256BigInt')

export const AmountPositiveUint256BigIntsSchema = getArraySchema(AmountPositiveUint256BigIntSchema, parseAmountPositiveUint256BigInt)

export type AmountPositiveUint256BigInt = z.infer<typeof AmountPositiveUint256BigIntSchema>

export function parseAmountPositiveUint256BigInt(int: AmountPositiveUint256BigInt): AmountPositiveUint256BigInt {
  return AmountPositiveUint256BigIntSchema.parse(int)
}

export function parseAmountPositiveUint256BigInts(ints: AmountPositiveUint256BigInt[]): AmountPositiveUint256BigInt[] {
  return AmountPositiveUint256BigIntsSchema.parse(ints)
}

export const isEqualAmountPositiveUint256BigInt = eq

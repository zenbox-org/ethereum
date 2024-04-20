import { getArraySchema } from 'libs/utils/zod'
import { equals } from 'remeda'
import { bigint, z } from 'zod'
import { uint256Max } from '../../../bn/constants'

export const AmountUint256BigIntSchema = bigint()
  .refine(n => n >= 0n, 'Must be greater or equal to 0')
  .refine(n => n <= amountUint256BigIntMax, 'Must be less or equal to max uint256')
  .describe('AmountUint256BigInt')

export const AmountUint256BigIntsSchema = getArraySchema(AmountUint256BigIntSchema, parseAmountUint256BigInt)

export type AmountUint256BigInt = z.infer<typeof AmountUint256BigIntSchema>

export function parseAmountUint256BigInt(int: AmountUint256BigInt): AmountUint256BigInt {
  return AmountUint256BigIntSchema.parse(int)
}

export function parseAmountUint256BigInts(ints: AmountUint256BigInt[]): AmountUint256BigInt[] {
  return AmountUint256BigIntsSchema.parse(ints)
}

export const isEqualAmountUint256BigInt = equals

export const amountUint256BigIntMax = uint256Max.toBigInt()

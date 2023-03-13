import { bigint, z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { eq } from 'libs/utils/lodash'
import { uint256MaxN } from '../../../bn/constants'

export const Int256BigIntSchema = bigint()
  .refine(n => n >= -uint256MaxN && n <= uint256MaxN, 'Must be between min int256 and max int256')
  .describe('Int256BigInt')

export const Int256BigIntsSchema = getArraySchema(Int256BigIntSchema, parseInt256BigInt)

export type Int256BigInt = z.infer<typeof Int256BigIntSchema>

export function parseInt256BigInt(int: Int256BigInt): Int256BigInt {
  return Int256BigIntSchema.parse(int)
}

export function parseInt256BigInts(ints: Int256BigInt[]): Int256BigInt[] {
  return Int256BigIntsSchema.parse(ints)
}

export const isEqualInt256BigInt = eq

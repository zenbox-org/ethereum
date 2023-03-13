import { bigint, z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { eq } from 'libs/utils/lodash'
import { uint256MaxN } from '../../../bn/constants'

export const Uint256BigIntSchema = bigint()
  .refine(n => n >= 0n, 'Must be greater or equal to 0')
  .refine(n => n <= uint256MaxN, 'Must be less or equal to max uint256')
  .describe('Uint256BigInt')

export const Uint256BigIntsSchema = getArraySchema(Uint256BigIntSchema, parseUint256BigInt)

export type Uint256BigInt = z.infer<typeof Uint256BigIntSchema>

export function parseUint256BigInt(int: Uint256BigInt): Uint256BigInt {
  return Uint256BigIntSchema.parse(int)
}

export function parseUint256BigInts(ints: Uint256BigInt[]): Uint256BigInt[] {
  return Uint256BigIntsSchema.parse(ints)
}

export const isEqualUint256BigInt = eq

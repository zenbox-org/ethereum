import { getArraySchema } from 'libs/utils/zod'
import { equals } from 'remeda'
import { bigint, z } from 'zod'
import { uint256MaxN, uint256MinN } from '../../constants'

export const Uint256BigIntSchema = bigint()
  .min(uint256MinN)
  .max(uint256MaxN)
  .describe('Uint256BigInt')

export const Uint256BigIntsSchema = getArraySchema(Uint256BigIntSchema, parseUint256BigInt)

export type Uint256BigInt = z.infer<typeof Uint256BigIntSchema>

export function parseUint256BigInt(int: Uint256BigInt): Uint256BigInt {
  return Uint256BigIntSchema.parse(int)
}

export function parseUint256BigInts(ints: Uint256BigInt[]): Uint256BigInt[] {
  return Uint256BigIntsSchema.parse(ints)
}

export const isEqualUint256BigInt = equals

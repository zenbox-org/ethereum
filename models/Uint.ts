import { z } from 'zod'
import { getArraySchema } from 'zenbox-util/zod'
import { BN } from '../../bn'
import { isEqualBN } from '../../bn/utils'

export const UintSchema = z.instanceof(BN)
  .refine(n => !n.isNegative())
  .describe('Uint')

export const UintUidSchema = UintSchema

export const UintsSchema = getArraySchema(UintSchema, parseUintUid)

export type Uint = z.infer<typeof UintSchema>

export type UintUid = z.infer<typeof UintUidSchema>

export function parseUint(uint: Uint): Uint {
  return UintSchema.parse(uint)
}

export function parseUints(uints: Uint[]): Uint[] {
  return UintsSchema.parse(uints)
}

export function parseUintUid(uintUid: UintUid): UintUid {
  return UintUidSchema.parse(uintUid)
}

export const isEqualUint = isEqualBN

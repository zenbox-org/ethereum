import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { isEqualSC } from 'libs/utils/lodash'
import { identity } from 'lodash-es'

/**
 * Represented as string (primitive type)
 */
export const AmountBNPrimitiveSchema = z.string().min(1).describe('AmountBNPrimitive')

export const AmountBNPrimitivesSchema = getArraySchema(AmountBNPrimitiveSchema, identity)

export type AmountBNPrimitive = z.infer<typeof AmountBNPrimitiveSchema>

export const parseAmountBNPrimitive = (string: AmountBNPrimitive): AmountBNPrimitive => AmountBNPrimitiveSchema.parse(string)

export const parseAmountBNPrimitives = (s: AmountBNPrimitive[]): AmountBNPrimitive[] => AmountBNPrimitivesSchema.parse(s)

export const isEqualAmountBNPrimitive = isEqualSC

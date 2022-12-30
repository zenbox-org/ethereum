import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { isEqualByDC } from 'libs/utils/lodash'
import { BalanceBNSchema, BalanceBNUidSchema } from './BalanceBN'
import { AmountBNPrimitiveSchema } from './AmountBNPrimitive'

export const BalanceBNPrimitiveSchema = BalanceBNSchema.extend({
  amount: AmountBNPrimitiveSchema,
}).describe('BalanceBNPrimitive')

export const BalanceBNPrimitiveUidSchema = BalanceBNUidSchema

export const BalancesBNPrimitiveSchema = getArraySchema(BalanceBNPrimitiveSchema, parseBalanceBNPrimitiveUid)

export type BalanceBNPrimitive = z.infer<typeof BalanceBNPrimitiveSchema>

export type BalanceBNPrimitiveUid = z.infer<typeof BalanceBNPrimitiveUidSchema>

export function parseBalanceBNPrimitive(balance: BalanceBNPrimitive): BalanceBNPrimitive {
  return BalanceBNPrimitiveSchema.parse(balance)
}

export function parseBalancesBNPrimitive(balances: BalanceBNPrimitive[]): BalanceBNPrimitive[] {
  return BalancesBNPrimitiveSchema.parse(balances)
}

export function parseBalanceBNPrimitiveUid(balanceUid: BalanceBNPrimitiveUid): BalanceBNPrimitiveUid {
  return BalanceBNPrimitiveUidSchema.parse(balanceUid)
}

export const isEqualBalanceBNPrimitive = isEqualByDC(parseBalanceBNPrimitiveUid)

import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { AddressSchema } from './Address'
import { AmountBNSchema } from './AmountBN'

export const BalanceBNSchema = z.object({
  address: AddressSchema,
  amount: AmountBNSchema,
}).describe('BalanceBN')

export const BalancesBNSchema = getArraySchema(BalanceBNSchema, getBalanceBNUid)

export const BalanceBNUidSchema = BalanceBNSchema.pick({
  address: true,
})

export type BalanceBN = z.infer<typeof BalanceBNSchema>

export type BalanceBNUid = z.infer<typeof BalanceBNUidSchema>

export function validateBalanceBN(balance: BalanceBN): BalanceBN {
  return BalanceBNSchema.parse(balance)
}

export function validateBalancesBN(balances: BalanceBN[]): BalanceBN[] {
  return BalancesBNSchema.parse(balances)
}

export function getBalanceBNUid(balanceUid: BalanceBNUid) {
  return BalanceBNUidSchema.parse(balanceUid)
}

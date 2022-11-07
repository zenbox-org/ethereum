import { z } from 'zod'
import { toUidFromSchema } from 'zenbox-util/uid'
import { getArraySchema } from 'zenbox-util/zod'
import { AddressSchema } from './Address'
import { AmountBNSchema } from './AmountBN'

export const BalanceBNSchema = z.object({
  address: AddressSchema,
  amount: AmountBNSchema,
})

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
  return toUidFromSchema(balanceUid, BalanceBNUidSchema)
}

import { z } from 'zod'
import { toUidFromSchema } from 'zenbox-util/uid'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { AddressSchema } from './Address'
import { AmountSchema } from '../../finance/models/Amount'

export const BalanceSchema = z.object({
  address: AddressSchema,
  amount: AmountSchema,
})

export const BalancesSchema = z.array(BalanceSchema)
  .superRefine(getDuplicatesRefinement('Balance', getBalanceUid))

export const BalanceUidSchema = BalanceSchema.pick({
  address: true,
})

export type Balance = z.infer<typeof BalanceSchema>

export type BalanceUid = z.infer<typeof BalanceUidSchema>

export function validateBalance(balance: Balance): Balance {
  return BalanceSchema.parse(balance)
}

export function validateBalances(balances: Balance[]): Balance[] {
  return BalancesSchema.parse(balances)
}

export function getBalanceUid(balanceUid: BalanceUid) {
  return toUidFromSchema(balanceUid, BalanceUidSchema)
}

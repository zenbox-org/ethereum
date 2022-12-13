import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { AddressSchema } from './Address'
import { AmountUint256BNSchema } from './AmountUint256BN'

export const BalanceUint256BNSchema = z.object({
  address: AddressSchema,
  amount: AmountUint256BNSchema,
}).describe('BalanceUint256BN')

export const BalanceUint256BNUidSchema = BalanceUint256BNSchema.pick({
  address: true,
})

export const BalanceUint256BNsSchema = getArraySchema(BalanceUint256BNSchema, parseBalanceUint256BNUid)

export type BalanceUint256BN = z.infer<typeof BalanceUint256BNSchema>

export type BalanceUint256BNUid = z.infer<typeof BalanceUint256BNUidSchema>

export function parseBalanceUint256BN(balance: BalanceUint256BN): BalanceUint256BN {
  return BalanceUint256BNSchema.parse(balance)
}

export function parseBalanceUint256BNs(balances: BalanceUint256BN[]): BalanceUint256BN[] {
  return BalanceUint256BNsSchema.parse(balances)
}

export function parseBalanceUint256BNUid(balanceUid: BalanceUint256BNUid): BalanceUint256BNUid {
  return BalanceUint256BNUidSchema.parse(balanceUid)
}

export const isEqualBalanceUint256BN = isEqualByDC(parseBalanceUint256BNUid)

import { BalanceBN } from '../BalanceBN'
import { BalanceBNPrimitive } from '../BalanceBNPrimitive'
import { bn } from '../../../bn/utils'

export function toBalanceBN<T extends BalanceBNPrimitive>(input: T): T & BalanceBN {
  const { amount } = input
  return {
    ...input,
    amount: bn(amount),
  }
}

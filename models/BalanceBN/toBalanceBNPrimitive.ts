import { BalanceBN } from '../BalanceBN'
import { BalanceBNPrimitive } from '../BalanceBNPrimitive'

export function toBalanceBNPrimitive<T extends BalanceBN>(input: T): T & BalanceBNPrimitive {
  const { amount } = input
  return {
    ...input,
    amount: amount.toString(),
  }
}

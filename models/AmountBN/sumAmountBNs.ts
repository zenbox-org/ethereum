import { sumBNs } from '../../../bn/utils'
import { AmountBN } from '../AmountBN'

export function sumAmountBNs(object: { amount: AmountBN }[]) {
  return sumBNs(object.map(o => o.amount))
}

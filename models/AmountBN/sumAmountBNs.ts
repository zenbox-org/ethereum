import { AmountBN } from '../AmountBN'
import { sumBN } from '../../../bn/utils'

export function sumAmountBNs(object: { amount: AmountBN }[]) {
  return sumBN(object.map(o => o.amount))
}

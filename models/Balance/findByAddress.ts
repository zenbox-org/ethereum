import { Address } from '../Address'
import { Balance } from '../Balance'

export function findByAddress(balances: Balance[], address: Address) {
  return balances.find(b => b.address === address)
}

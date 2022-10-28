import { Balance } from '../Balance'
import { Address } from '../Address'

export function findByAddress(balances: Balance[], address: Address) {
  return balances.find(b => b.address === address)
}

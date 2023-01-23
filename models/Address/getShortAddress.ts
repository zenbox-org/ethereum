import { Address } from '../Address'

export function getShortAddress(address: Address) {
  return address.slice(0, 4) + '...' + address.slice(-4)
}

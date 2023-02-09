import { Network } from '../Network'

export function fromBlockCountToDuration(network: Network, count: number) {
  return count * network.blockTime
}

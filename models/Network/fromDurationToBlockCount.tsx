import { Network } from '../Network'

export function fromDurationToBlockCount(network: Network, duration: number) {
  return Math.trunc(duration / network.blockTime)
}

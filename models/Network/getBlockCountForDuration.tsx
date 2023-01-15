import { Network } from '../Network'

export function getBlockCountForDuration(network: Network, duration: number) {
  return Math.trunc(duration / network.blockTime)
}

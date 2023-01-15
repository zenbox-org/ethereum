import { z } from 'zod'
import { getDuplicatesRefinement } from '../../utils/zod'
import { NetworkNameSchema } from './NetworkName'
import { BlockchainNetworkSchema } from '../../blockchain/models/BlockchainNetwork'
import { DurationSchema } from '../../generic/models/Duration'

export const NetworkSchema = z.object({
  name: NetworkNameSchema,
  blockchain: BlockchainNetworkSchema,
  chainId: z.number().int().positive(),
  blockTime: DurationSchema,
  blockGasLimit: z.number().int().min(1000),
})

export const NetworksSchema = z.array(NetworkSchema)
  .superRefine(getDuplicatesRefinement('Network', parseNetworkUid))
  .superRefine(getDuplicatesRefinement('Network', n => n.chainId))

export const NetworkUidSchema = NetworkSchema.pick({
  name: true,
})

export type Network = z.infer<typeof NetworkSchema>

export type NetworkUid = z.infer<typeof NetworkUidSchema>

export function parseNetwork(network: Network): Network {
  return NetworkSchema.parse(network)
}

export function parseNetworks(networks: Network[]): Network[] {
  return NetworksSchema.parse(networks)
}

export function parseNetworkUid(networkUid: NetworkUid): NetworkUid {
  return NetworkUidSchema.parse(networkUid)
}

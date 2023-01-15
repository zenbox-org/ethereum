import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { isEqualByDC } from 'libs/utils/lodash'
import { NetworkNameSchema } from './NetworkName'

export const NetworkExplorerSchema = z.object({
  name: NetworkNameSchema,
  url: z.string().url().min(1),
}).describe('NetworkExplorer')

export const NetworkExplorerUidSchema = NetworkExplorerSchema.pick({
  name: true,
})

export const NetworkExplorersSchema = getArraySchema(NetworkExplorerSchema, parseNetworkExplorerUid)

export type NetworkExplorer = z.infer<typeof NetworkExplorerSchema>

export type NetworkExplorerUid = z.infer<typeof NetworkExplorerUidSchema>

export function parseNetworkExplorer(explorer: NetworkExplorer): NetworkExplorer {
  return NetworkExplorerSchema.parse(explorer)
}

export function parseNetworkExplorers(explorers: NetworkExplorer[]): NetworkExplorer[] {
  return NetworkExplorersSchema.parse(explorers)
}

export function parseNetworkExplorerUid(explorerUid: NetworkExplorerUid): NetworkExplorerUid {
  return NetworkExplorerUidSchema.parse(explorerUid)
}

export const isEqualNetworkExplorer = isEqualByDC(parseNetworkExplorerUid)

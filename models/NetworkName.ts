import { z } from 'zod'

export const NetworkNameSchema = z.enum(['hardhat', 'localhost', 'mainnet', 'goerli', 'ropsten', 'rinkeby', 'bnbtestnet', 'bnbmainnet', 'avaxtestnet', 'avaxmainnet'])

const { hardhat, localhost } = NetworkNameSchema.enum

export type NetworkName = z.infer<typeof NetworkNameSchema>

export const localTestnets: NetworkName[] = [hardhat, localhost]

export function parseNetworkName(name: NetworkName | string): NetworkName {
  return NetworkNameSchema.parse(name)
}

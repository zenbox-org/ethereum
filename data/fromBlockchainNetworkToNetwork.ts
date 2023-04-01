import { BNBChainMainnet, EthereumMainnet } from '../../blockchain/data/allBlockchainNetworks'
import { BlockchainNetwork } from '../../blockchain/models/BlockchainNetwork'
import { BlockchainBNBChainMainnet, BlockchainEthereumMainnet } from '../../finance/data/allNetworks'
import { Network } from '../../finance/models/Network'
import { getSymmetricMap } from '../../utils/Map/getSymmetricMap'

export const fromBlockchainNetworkToNetwork: Map<BlockchainNetwork, Network> = new Map([
  [BNBChainMainnet, BlockchainBNBChainMainnet],
  [EthereumMainnet, BlockchainEthereumMainnet],
])

export const fromNetworkToBlockchainNetwork = getSymmetricMap(fromBlockchainNetworkToNetwork)

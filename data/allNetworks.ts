import { Network, NetworkSchema, parseNetworkUid } from '../models/Network'
import { getFinder, getInserter } from '../../../util/zod'
import { identity, minBy } from 'remeda'
import { BNBChainMainnet, BNBChainTestnet, EthGoerli, EthHardhat, EthMainnet, EthRinkeby, EthRopsten } from '../../blockchain/data/allBlockchainNetworks'

export const allNetworks: Network[] = []

export const addNetwork = getInserter('Network', NetworkSchema, parseNetworkUid, allNetworks)

export const findNetwork = getFinder(parseNetworkUid, allNetworks)

export const findNetworkByChainId = (chainId: number) => allNetworks.find(n => n.chainId === chainId)

export const getMinBlockGasLimit = () => minBy(allNetworks.map(n => n.blockGasLimit), identity)

/**
 * https://hardhat.org/hardhat-network/reference/#config
 */
export const hardhat = addNetwork({
  name: 'hardhat',
  blockchain: EthHardhat,
  chainId: 31337,
  blockGasLimit: 30000000,
})

export const mainnet = addNetwork({
  name: 'mainnet',
  blockchain: EthMainnet,
  chainId: 1,
  blockGasLimit: 30000000, // https://etherscan.io/blocks
})

export const goerli = addNetwork({
  name: 'goerli',
  blockchain: EthGoerli,
  chainId: 5,
  blockGasLimit: 30000000, // https://goerli.etherscan.io/blocks
})

export const ropsten = addNetwork({
  name: 'ropsten',
  blockchain: EthRopsten,
  chainId: 3,
  blockGasLimit: 8000000, // https://ropsten.etherscan.io/blocks
})

export const rinkeby = addNetwork({
  name: 'rinkeby',
  blockchain: EthRinkeby,
  chainId: 4,
  blockGasLimit: 30000000, // https://rinkeby.etherscan.io/blocks
})

export const bscmainnet = addNetwork({
  name: 'bscmainnet',
  blockchain: BNBChainMainnet,
  chainId: 56,
  blockGasLimit: 85000000,
})

export const bsctestnet = addNetwork({
  name: 'bsctestnet',
  blockchain: BNBChainTestnet,
  chainId: 97,
  blockGasLimit: 30000000,
})

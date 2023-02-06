import { Network, NetworkSchema, parseNetworkUid } from '../models/Network'
import { getFinder, getInserter } from '../../utils/zod'
import { identity, minBy } from 'remeda'
import { BNBChainMainnet, BNBChainTestnet, CantoMainnet, CantoTestnet, EthGoerli, EthHardhat, EthMainnet, EthRinkeby, EthRopsten } from '../../blockchain/data/allBlockchainNetworks'
import { seconds } from '../../utils/duration'

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
  blockTime: 0, // local mining on-demand
  blockGasLimit: 30000000,
})

export const mainnet = addNetwork({
  name: 'mainnet',
  blockchain: EthMainnet,
  chainId: 1,
  blockTime: 15 * seconds,
  blockGasLimit: 30000000, // https://etherscan.io/blocks
})

export const ropsten = addNetwork({
  name: 'ropsten',
  blockchain: EthRopsten,
  chainId: 3,
  blockTime: 15 * seconds,
  blockGasLimit: 8000000, // https://ropsten.etherscan.io/blocks
})

export const rinkeby = addNetwork({
  name: 'rinkeby',
  blockchain: EthRinkeby,
  chainId: 4,
  blockTime: 15 * seconds,
  blockGasLimit: 30000000, // https://rinkeby.etherscan.io/blocks
})

export const goerli = addNetwork({
  name: 'goerli',
  blockchain: EthGoerli,
  chainId: 5,
  blockTime: 15 * seconds,
  blockGasLimit: 30000000, // https://goerli.etherscan.io/blocks
})

export const bnbmainnet = addNetwork({
  name: 'bnbmainnet',
  blockchain: BNBChainMainnet,
  chainId: 56,
  blockTime: 3 * seconds,
  blockGasLimit: 85000000,
})

export const bnbtestnet = addNetwork({
  name: 'bnbtestnet',
  blockchain: BNBChainTestnet,
  chainId: 97,
  blockTime: 3 * seconds,
  blockGasLimit: 30000000,
})

/**
 * https://docs.canto.io/evm-development/overview
 */
export const cantomainnet = addNetwork({
  name: 'cantomainnet',
  blockchain: CantoMainnet,
  chainId: 7700,
  blockTime: 6 * seconds,
  blockGasLimit: 30000000,
})

export const cantotestnet = addNetwork({
  name: 'cantotestnet',
  blockchain: CantoTestnet,
  chainId: 740,
  blockTime: 6 * seconds,
  blockGasLimit: 30000000,
})

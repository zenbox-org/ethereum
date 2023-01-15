import { getNetworkExplorerUid, NetworkExplorer, NetworkExplorerSchema } from '../models/NetworkExplorer'
import { getFinder, getInserter } from '../../../util/zod'

export const allNetworkExplorers: NetworkExplorer[] = []

export const addNetworkExplorer = getInserter('NetworkExplorer', NetworkExplorerSchema, getNetworkExplorerUid, allNetworkExplorers)

export const findNetworkExplorer = getFinder(getNetworkExplorerUid, allNetworkExplorers)

addNetworkExplorer({
  name: 'hardhat',
  url: 'hardhat://',
})

addNetworkExplorer({
  name: 'mainnet',
  url: 'https://etherscan.io',
})

addNetworkExplorer({
  name: 'ropsten',
  url: 'https://ropsten.etherscan.io',
})

addNetworkExplorer({
  name: 'goerli',
  url: 'https://goerli.etherscan.io',
})

addNetworkExplorer({
  name: 'rinkeby',
  url: 'https://rinkeby.etherscan.io',
})

addNetworkExplorer({
  name: 'bnbmainnet',
  url: 'https://bscscan.com',
})

addNetworkExplorer({
  name: 'bnbtestnet',
  url: 'https://testnet.bscscan.com',
})

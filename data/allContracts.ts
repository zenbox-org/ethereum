import { getFinder, getInserter } from 'libs/utils/zod'
import { BNBChainMainnet, BNBChainTestnet, EthereumMainnet } from '../../blockchain/data/allBlockchainNetworks'
import { Contract, ContractSchema, parseContractUid } from '../models/Contract'

export const allContracts: Contract[] = []

export const addContract = getInserter('Contract', ContractSchema, parseContractUid, allContracts)

export const findContract = getFinder(parseContractUid, allContracts)

export const WethEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  type: 'ERC20Token',
})

export const ColiEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xd49efa7bc0d339d74f487959c573d518ba3f8437',
  type: 'ERC20Token',
})

export const ColiBNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0x3470C81026C8085b7B743695f851353043Ff0d0D',
  type: 'ERC20Token',
  notes: `
    * Wormhole bridge
  `,
})

export const BullEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x1Bb022aB668085C6417B7d7007b0fbD53bACc383',
  type: 'ERC20Token',
  notes: 'Deprecated, not used anymore',
})

export const BullBNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0xEFB7311cc5d66b19FeD6a19148A3Ecf801e65100',
  type: 'ERC20Token',
})

export const UniswapV2_BULL_USDT_EthereumMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x59B8c20CA527ff18e2515b68F28939d6dD3E867B',
  type: 'UniswapV2Pool',
  notes: 'Closed',
})

export const ColiChainPortBridgeBNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0x5b16273f4143477066f46a36b31baa5fc4429245',
  type: 'ChainPortBNBChainMainnetBridgeToken',
})

export const UniswapV2_COLI_WETH_EthereumMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x5ecdc0d5d89fa727612d271bc040043120381757',
  type: 'UniswapV2Pool',
})

export const UniswapV3_COLI_USDT_EthereumMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xcbf3daf2e4a3be10fad16cb5a388dac56d5b3a02',
  type: 'UniswapV3Pool',
})

export const UniswapV2_BULL_COLI_EthereumMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xa924eae56f772626cf13b08c2bf384db9059e3be',
  type: 'UniswapV2Pool',
})

export const PancakeSwap_COLI_BUSD_BNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0x7CC6bAD190dc8a4fb9029603e4e7fe9805aA0E1E',
  type: 'PancakeSwapPool',
})

export const ShieldFinanceNFTradePoolEthereumMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x33a4288AB7043C274AACD2c9Eb8a931c30C0288a',
  type: 'NFTradePool',
})

export const BusdEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  type: 'ERC20Token',
})

export const BusdBNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  type: 'ERC20Token',
})

export const BUSDbnbtestnetContract = addContract({
  network: BNBChainTestnet,
  address: '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
  type: 'ERC20Token',
})

export const UsdtEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  type: 'ERC20Token',
})

export const UsdtBNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0x55d398326f99059ff775485246999027b3197955',
  type: 'ERC20Token',
})

export const UsdcEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  type: 'ERC20Token',
})

export const UsdcBNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  type: 'ERC20Token',
})

export const DaiEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  type: 'ERC20Token',
})

export const DaiBNBChainMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  type: 'ERC20Token',
})

export const MainframeEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',
  type: 'ERC20Token',
})

export const WePowerEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x4cf488387f035ff08c371515562cba712f9015d4',
  type: 'ERC20Token',
})

export const CindicatorEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa',
  type: 'ERC20Token',
})

export const CanYaCoinEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0',
  type: 'ERC20Token',
})

export const DragonEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e',
  type: 'ERC20Token',
})

export const FuelEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xea38eaa3c86c8f9b751533ba2e562deb9acded40',
  type: 'ERC20Token',
})

export const ExpertyWisdomEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0xdecade1c6bf2cd9fb89afad73e4a519c867adcf5',
  type: 'ERC20Token',
})

export const akSwapEthMainnetContract = addContract({
  network: EthereumMainnet,
  address: '0x82dfdb2ec1aa6003ed4acba663403d7c2127ff67',
  type: 'ERC20Token',
})

export const yetiswapEthMainnetContract = addContract({
  network: BNBChainMainnet,
  address: '0x3b4DEB27A46e746776a661eCf523c42ED0400d54',
  type: 'ERC20Token',
})

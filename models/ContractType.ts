import { z } from 'zod'

export const ContractTypeSchema = z.enum(['ERC20Token', 'UniswapV2Pool', 'UniswapV3Pool', 'PancakeSwapPool', 'ChainPortBNBChainMainnetBridgeToken', 'NFTradePool', 'Fairpool'])

export type ContractType = z.infer<typeof ContractTypeSchema>

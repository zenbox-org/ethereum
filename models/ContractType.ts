import { z } from 'zod'

export const ContractTypeSchema = z.enum(['ERC20Token', 'UniswapV2Pool', 'UniswapV3Pool', 'BSCBridgeToken', 'NFTradePool', 'Fairpool'])

export type ContractType = z.infer<typeof ContractTypeSchema>

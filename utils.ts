import { toRenderedAmountBND } from '../utils/bignumber.convert'
import { DefaultDecimals } from './constants'

/**
 * Current supply: 122,373,866 ETH
 * Number of bits needed to represent supply, scaled to 18 decimals: 87 bits
 */

export const renderETH = toRenderedAmountBND(DefaultDecimals)

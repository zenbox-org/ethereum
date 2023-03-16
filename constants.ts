import { int256Max, int256Min, uint128Max, uint256Max } from '../bn/constants'
import { bn } from '../bn/utils'
import { toRenderedAmountBND } from '../utils/BigNumber/conversions'

export const DefaultDecimals = bn(18)

export const DefaultScale = bn(10).pow(DefaultDecimals)

export const DefaultRenderer = toRenderedAmountBND(DefaultDecimals)

export const uint256MaxN = uint256Max.toBigInt()

export const uint256MinN = 0n

export const uint128MaxN = uint128Max.toBigInt()

export const uint128MinN = 0n

export const int256MaxN = int256Max.toBigInt()

export const int256MinN = int256Min.toBigInt()

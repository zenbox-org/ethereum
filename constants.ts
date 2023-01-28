import { BN } from '../bn'
import { bn } from '../bn/utils'
import { toRenderedAmountBND } from '../utils/bignumber.convert'

export const MaxUint256 = BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export const DefaultDecimals = bn(18)

export const DefaultScale = bn(10).pow(DefaultDecimals)

export const DefaultRenderer = toRenderedAmountBND(DefaultDecimals)

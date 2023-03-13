import { add, sub } from '../bn/math'
import { bn } from '../bn/utils'
import { uint256Max } from '../bn/constants'

export const addUint = add(uint256Max)

export const subUint = sub(bn(0))

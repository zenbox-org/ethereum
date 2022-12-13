import { add, sub } from '../bn/math'
import { bn } from '../bn/utils'
import { MaxUint256 } from './constants'

export const addUint = add(MaxUint256)

export const subUint = sub(bn(0))

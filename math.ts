import { add, sub } from '../bn/math'
import { MaxUint256 } from './constants'
import { bn } from '../bn/utils'

export const addUint = add(MaxUint256)

export const subUint = sub(bn(0))

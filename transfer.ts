import { Address } from './models/Address'
import { BigNumber } from 'zenbox-util/bignumber'
import { task } from '../../src/task'

export async function transfer(from: Address, to: Address, amount: BigNumber) {
  throw task()
}

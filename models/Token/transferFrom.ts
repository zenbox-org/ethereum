import { Address } from '../Address'
import { Amount } from '../../../finance/models/Amount'
import { impl } from 'zenbox-util/todo'
import { Token } from '../Token'

export function transferFrom(token: Token, from: Address, to: Address, amount: Amount) {
  throw impl()
  // const fromBalance = token.balances.get(from) || new BigNumber(0)
  // const toBalance = token.balances.get(to) || new BigNumber(0)
  // expect(fromBalance).to.be.bignumber.gte(amount)
  // token.balances.set(from, fromBalance.minus(amount))
  // token.balances.set(from, toBalance.plus(amount))
}

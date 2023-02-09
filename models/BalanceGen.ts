import * as $ from '../../finance/models/BalanceGen'
import { Address } from './Address'

export type BalanceGen<Asset, Amount> = $.BalanceGen<Address, Asset, Amount>

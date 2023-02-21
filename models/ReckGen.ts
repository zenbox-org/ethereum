import * as $ from '../../finance/models/ReckGen'
import { Address } from './Address'

export type ReckGen<Asset, Amount> = $.ReckGen<Address, Asset, Amount>

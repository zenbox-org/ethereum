import * as $ from '../../finance/models/FintGen'
import { Address } from './Address'

export type ReckGen<Asset, Amount> = $.FintGen<Address, Asset, Amount>

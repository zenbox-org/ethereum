import { z } from 'zod'
import { AmountPositiveBNSchema } from './AmountPositiveBN'
import { BNLike } from '../../bn'
import { bn } from '../../bn/utils'

export const DecimalsSchema = AmountPositiveBNSchema

export type Decimals = z.infer<typeof DecimalsSchema>

export function validateDecimals(decimals: BNLike) {
  return DecimalsSchema.parse(bn(decimals))
}

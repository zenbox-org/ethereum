import { BigNumber } from 'libs/utils/bignumber'
import { z } from 'zod'

export const DecimalsSchema = z.instanceof(BigNumber)

export type Decimals = z.infer<typeof DecimalsSchema>

export function validateDecimals(decimals: BigNumber.Value) {
  return DecimalsSchema.parse(new BigNumber(decimals))
}

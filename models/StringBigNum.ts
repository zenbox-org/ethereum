import { z } from 'zod'
import BigNumber from 'bignumber.js'

export const StringBigNumSchema = z.string()
  .min(1, 'Must not be empty')
  .refine(n => !new BigNumber(n).isNaN(), 'Must be a number')

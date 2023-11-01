import { getAddress as normalizeAddress } from '@ethersproject/address'
import { z } from 'zod'
import { RefinementCtx } from 'zod/lib/types'

export const superRefineAddress = (value: string, ctx: RefinementCtx) => {
  try {
    normalizeAddress(value)
  } catch (error) {
    if (error instanceof Error) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: error.toString(),
      })
    } else {
      throw error
    }
  }
}

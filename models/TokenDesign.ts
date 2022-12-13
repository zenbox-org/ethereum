import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { AmountSchema } from '../../finance/models/Amount'
import { TickerSchema } from '../../finance/models/Ticker'
import { NameSchema } from '../../generic/models/Name'
import { DecimalsSchema } from './Decimals'

export const TokenDesignSchema = z.object({
  name: NameSchema,
  ticker: TickerSchema,
  decimals: DecimalsSchema,
  maxSupply: AmountSchema.optional(),
})

export const TokenDesignUidSchema = TokenDesignSchema.pick({
  name: true,
})

export const TokenDesignsSchema = z.array(TokenDesignSchema).superRefine(
  getDuplicatesRefinement('TokenDesign', getTokenDesignUid),
)

export function getTokenDesignUid(design: TokenDesign) {
  return TokenDesignUidSchema.parse(design)
}

export type TokenDesign = z.infer<typeof TokenDesignSchema>

export type TokenDesigns = z.infer<typeof TokenDesignsSchema>

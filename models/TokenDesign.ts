import { z } from 'zod'
import { TickerSchema } from '../../finance/models/Ticker'
import { AmountSchema } from '../../finance/models/Amount'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { NameSchema } from '../../generic/models/Name'
import { DecimalsSchema } from './Decimals'
import { toUidFromSchema } from 'zenbox-util/uid'

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
  return toUidFromSchema(design, TokenDesignUidSchema)
}

export type TokenDesign = z.infer<typeof TokenDesignSchema>

export type TokenDesigns = z.infer<typeof TokenDesignsSchema>

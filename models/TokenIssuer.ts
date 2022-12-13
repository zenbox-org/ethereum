import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'

export const TokenIssuerSchema = z.object({
  name: z.string().min(1),
})

export const TokenIssuersSchema = z.array(TokenIssuerSchema).superRefine(
  getDuplicatesRefinement('TokenIssuer', getTokenIssuerUid),
)

export function getTokenIssuerUid(tokenIssuer: TokenIssuer) {
  return tokenIssuer.name
}

export type TokenIssuer = z.infer<typeof TokenIssuerSchema>

export type TokenIssuers = z.infer<typeof TokenIssuersSchema>

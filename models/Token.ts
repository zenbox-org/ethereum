import { z } from 'zod'
import { toUidFromSchema } from 'zenbox-util/uid'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { ContractSchema, ContractUidSchema } from './Contract'
import { BalancesSchema } from './Balance'
import { TokenDesignSchema } from './TokenDesign'
import { Id } from '../../generic/models/Id'

export const TokenSchema = z.object({
  design: TokenDesignSchema,
  contract: ContractSchema,
  balances: BalancesSchema.default([]),
})

export const TokensSchema = z.array(TokenSchema)
  .superRefine(getDuplicatesRefinement('Token', getTokenUid))

export const TokenUidSchema = z.object({
  contract: ContractUidSchema,
})

export type Token = z.infer<typeof TokenSchema>

export type TokenUid = z.infer<typeof TokenUidSchema>

export function validateToken(token: Token): Token {
  return TokenSchema.parse(token)
}

export function validateTokens(tokens: Token[]): Token[] {
  return TokensSchema.parse(tokens)
}

export function getTokenUid(tokenUid: TokenUid) {
  return toUidFromSchema(tokenUid, TokenUidSchema)
}

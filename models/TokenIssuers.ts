import { TokenIssuerSchema } from './TokenIssuer'

export const Binance = TokenIssuerSchema.parse({
  name: 'Binance',
})

export const ShieldFinance = TokenIssuerSchema.parse({
  name: 'Shield Finance',
})

export const Marnotaur = TokenIssuerSchema.parse({
  name: 'Marnotaur',
})

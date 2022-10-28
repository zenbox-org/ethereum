import { getTokenDesignUid, TokenDesign, TokenDesignSchema } from '../models/TokenDesign'
import { getFinder, getInserter } from 'zenbox-util/zod'
import { num } from 'zenbox-util/bignumber'
import { D18, D6 } from './allDecimals'
import { todo } from 'zenbox-util/todo'

export const allTokenDesigns: TokenDesign[] = []

export const addTokenDesign = getInserter('TokenDesign', TokenDesignSchema, getTokenDesignUid, allTokenDesigns)

export const findTokenDesign = getFinder(getTokenDesignUid, allTokenDesigns)

export const ColiDesign = addTokenDesign({
  name: 'Coliquidity Token',
  ticker: 'COLI',
  decimals: D18,
})

export const BullTokenDesign = addTokenDesign({
  name: 'Bull Token',
  ticker: 'BULL',
  decimals: D18,
})

export const BinanceCoinDesign = addTokenDesign({
  name: 'Binance Coin',
  ticker: 'BNB',
  decimals: D18,
  maxSupply: num('168137036'),
})

export const WrappedBinanceCoinDesign = addTokenDesign({
  name: 'Wrapped Binance Coin',
  ticker: 'WBNB',
  decimals: todo(D18, 'not sure'),
})

export const BinanceUSDDesign = addTokenDesign({
  name: 'Binance USD',
  ticker: 'BUSD',
  decimals: D18,
})

export const USDTDesign = addTokenDesign({
  name: 'Tether',
  ticker: 'USDT',
  decimals: D6,
})

export const USDCDesign = addTokenDesign({
  name: 'USD Coin',
  ticker: 'USDC',
  decimals: D6,
})

export const MarnotaurTokenDesign = addTokenDesign({
  name: 'Marnotaur Token',
  ticker: 'TAUR',
  decimals: D18,
})

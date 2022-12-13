import { getFinder, getInserter } from 'libs/utils/zod'
import { getTokenUid, Token, TokenSchema } from '../models/Token'
import { ColiBscMainnetContract, ColiEthMainnetContract, UsdcEthMainnetContract, UsdtEthMainnetContract } from './allContracts'
import { ColiDesign, USDCDesign, USDTDesign } from './allTokenDesigns'

export const allTokens: Token[] = []

export const addToken = getInserter('Token', TokenSchema, getTokenUid, allTokens)

export const findToken = getFinder(getTokenUid, allTokens)

export const COLIEthMainnet = addToken({
  design: ColiDesign,
  contract: ColiEthMainnetContract,
})

export const COLIBscMainnet = addToken({
  design: ColiDesign,
  contract: ColiBscMainnetContract,
})

export const USDTEthMainnet = addToken({
  design: USDTDesign,
  contract: UsdtEthMainnetContract,
})

export const USDCEthMainnet = addToken({
  design: USDCDesign,
  contract: UsdcEthMainnetContract,
})

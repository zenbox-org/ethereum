import { parseTassetUid, Tasset } from '../../finance/models/Tasset'
import { USDC, USDT } from '../../finance/data/allTassets'
import { byUid } from 'libs/utils/uid'

export const allStablecoins: Tasset[] = [
  USDT,
  USDC,
]

export function isStablecoin(tasset: Tasset): boolean {
  return !!allStablecoins.find(byUid(parseTassetUid, tasset))
}

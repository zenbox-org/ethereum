import { byUid } from 'libs/utils/uid'
import { USDC, USDT } from '../../finance/data/allAssets'
import { Asset, parseAssetUid } from '../../finance/models/Asset'

export const allStablecoins: Asset[] = [
  USDT,
  USDC,
]

export function isStablecoin(asset: Asset): boolean {
  return !!allStablecoins.find(byUid(parseAssetUid, asset))
}

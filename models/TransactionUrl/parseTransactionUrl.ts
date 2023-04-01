import { BlockchainExplorer } from '../../../blockchain/models/BlockchainExplorer'
import { assertEq } from '../../../utils/assert'
import { ensureFind } from '../../../utils/ensure'
import { parseTransactionHash } from '../TransactionHash'

export const parseTransactionUrl = (explorers: BlockchainExplorer[]) => (url: string) => {
  const explorer = ensureFind(explorers, e => url.startsWith(e.url), new Error(`Can't find an explorer for ${url}`))
  const result = new URL(url)
  const [$tx, $hash] = result.pathname.split('/').slice(1)
  assertEq($tx, 'tx', '$tx', 'tx')
  const hash = parseTransactionHash($hash)
  return { explorer, hash }
}

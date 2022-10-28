import { parseFileContentsByStrategy, ParseFileContentsStrategy } from '../../../filesystem/parseFileContentsByStrategy'
import { parseEtherscanERC1155TransactionsCSV, parseEtherscanERC20TransactionsCSV, parseEtherscanETHTransactionsCSVClean } from './parseEtherscanTransactionsCSV'
import { Transfer, validateTransfers } from '../../../finance/models/Transfer'
import { GetAssetByContractUid } from '../../../finance/models/Asset/getAssetByContractUid'
import { fromEtherscanERC1155TransactionToTransfer } from '../../../finance/models/Transfer/fromEtherscanERC1155TransactionToTransfer'
import { fromEtherscanERC20TransactionToTransfer } from '../../../finance/models/Transfer/fromEtherscanERC20TransactionToTransfer'
import { fromEtherscanETHTransactionToTransfer } from '../../../finance/models/Transfer/fromEtherscanETHTransactionToTransfer'

export async function readTransfersFromEtherscanCSV(path: string, getAsset: GetAssetByContractUid) {
  return parseFileContentsByStrategy(path, strategies, getAsset)
}

export async function parseEtherscanERC1155TransfersCSV(contents: string, getAsset: GetAssetByContractUid) {
  const transactions = await parseEtherscanERC1155TransactionsCSV(contents)
  const transfers = transactions.map(fromEtherscanERC1155TransactionToTransfer(getAsset))
  return validateTransfers(transfers)
}

export async function parseEtherscanERC20TransfersCSV(contents: string, getAsset: GetAssetByContractUid) {
  const transactions = await parseEtherscanERC20TransactionsCSV(contents)
  const transfers = transactions.map(fromEtherscanERC20TransactionToTransfer(getAsset))
  return validateTransfers(transfers)
}

export async function parseEtherscanETHTransfersCSV(contents: string, getAsset: GetAssetByContractUid) {
  const transactions = await parseEtherscanETHTransactionsCSVClean(contents)
  const transfers = transactions.map(fromEtherscanETHTransactionToTransfer)
  return validateTransfers(transfers)
}

const strategies: ParseFileContentsStrategy<Transfer[], [GetAssetByContractUid]>[] = [
  {
    basenamePrefix: 'address-token-nft1155-0x',
    parse: parseEtherscanERC1155TransfersCSV,
  },
  {
    basenamePrefix: 'export-address-token-0x',
    parse: parseEtherscanERC20TransfersCSV,
  },
  {
    basenamePrefix: 'export-0x',
    parse: parseEtherscanETHTransfersCSV,
  },
]

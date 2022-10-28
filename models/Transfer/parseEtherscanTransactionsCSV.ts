import { EtherscanERC1155Transaction, parseEtherscanERC1155Transactions } from '../../../etherscan/models/EtherscanERC1155Transaction'
import { parseCSV, transformHeaderFromRecord } from 'zenbox-util/papaparse'
import { EtherscanERC20Transaction, parseEtherscanERC20Transactions } from '../../../etherscan/models/EtherscanERC20Transaction'
import { EtherscanETHTransaction, isCleanEtherscanETHTransaction, isNonZeroEtherscanEthTransaction, parseEtherscanETHTransactions } from '../../../etherscan/models/EtherscanETHTransaction'
import { replaceInFirstLine } from 'zenbox-util/string'
import { fromEtherscanAmountToAmount } from '../../../etherscan/models/EtherscanAmount/fromEtherscanAmountToAmount'

export async function parseEtherscanERC1155TransactionsCSV(contentsRaw: string) {
  const contents = fixEtherscanERC1155CSVExportHeader(contentsRaw)
  const transformHeader = transformHeaderFromRecord(transformHeadersRecord)
  const results = await parseCSV<EtherscanERC1155Transaction>(contents, { transformHeader })
  return parseEtherscanERC1155Transactions(results)
}

export async function parseEtherscanERC20TransactionsCSV(contentsRaw: string) {
  const contents = fixEtherscanERC20CSVExportHeader(contentsRaw)
  const transformHeader = transformHeaderFromRecord(transformHeadersRecord)
  const results = await parseCSV<EtherscanERC20Transaction>(contents, { transformHeader, transform: transformRawEtherscanERC20Transaction })
  return parseEtherscanERC20Transactions(results)
}

export async function parseEtherscanETHTransactionsCSV(contentsRaw: string) {
  const contents = fixEtherscanETHCSVExportHeader(contentsRaw)
  const transformHeader = transformHeaderFromRecord(transformHeadersRecord)
  const results = await parseCSV<EtherscanETHTransaction>(contents, { transformHeader, transform: transformRawEtherscanETHTransaction })
  return parseEtherscanETHTransactions(results)
}

export async function parseEtherscanETHTransactionsCSVClean(contents: string) {
  const transactionsDirty = await parseEtherscanETHTransactionsCSV(contents)
  return transactionsDirty
    .filter(isCleanEtherscanETHTransaction)
    .filter(isNonZeroEtherscanEthTransaction)
}

function fixEtherscanERC1155CSVExportHeader(contentsRaw: string) {
  return replaceInFirstLine(contentsRaw, '"TokenId","TokenName","TokenSymbol"', '"TokenId","TokenAmount","TokenName","TokenSymbol"')
}

function fixEtherscanERC20CSVExportHeader(contentsRaw: string) {
  return replaceInFirstLine(contentsRaw, '"TokenSymbol"', '"TokenSymbol","Unknown"')
}

function fixEtherscanETHCSVExportHeader(contentsRaw: string) {
  return replaceInFirstLine(contentsRaw, '"Method"', '"Method","Unknown"')
}

export const transformHeadersRecord = {
  'Txhash': 'hash',
  'UnixTimestamp': 'date',
  'Value_IN(ETH)': 'amountIn',
  'Value_OUT(ETH)': 'amountOut',
  'Value': 'amount',
  // 'ContractAddress': 'contract',
}

// "Txhash","Blockno","UnixTimestamp","DateTime","From","To","ContractAddress","Value_IN(ETH)","Value_OUT(ETH)","CurrentValue @ $2623.51/Eth","TxnFee(ETH)","TxnFee(USD)","Historical $Price/Eth","Status","ErrCode","Method"
export const transformRawEtherscanETHTransaction = (value: string, field: string | number) => {
  switch (field) {
    case 'date':
      return new Date(parseInt(value) * 1000)
    case 'amountIn':
    case 'amountOut':
      return fromEtherscanAmountToAmount(value)
    case 'contractAddress':
    case 'status':
    case 'errCode':
      return value || undefined
    case '__parsed_extra':
      throw new Error()
    default:
      return value
  }
}

// "Txhash","UnixTimestamp","DateTime","From","To","Value","ContractAddress","TokenName","TokenSymbol"
export const transformRawEtherscanERC20Transaction = (value: string, field: string | number) => {
  switch (field) {
    case 'date':
      return new Date(parseInt(value) * 1000)
    case 'amount':
      return fromEtherscanAmountToAmount(value)
    case '__parsed_extra':
      throw new Error()
    default:
      return value
  }
}

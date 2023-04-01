import { isEqualSC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { identity } from 'remeda'

import { z } from 'zod'

export const TransactionHashSchema = z.string().regex(/^0x[A-Fa-f0-9]{64}$/).describe('TransactionHash')

export const TransactionHashesSchema = getArraySchema(TransactionHashSchema, identity)

export type TransactionHash = z.infer<typeof TransactionHashSchema>

export const parseTransactionHash = (hash: TransactionHash): TransactionHash => TransactionHashSchema.parse(hash)

export const parseTransactionHashes = (hashes: TransactionHash[]): TransactionHash[] => TransactionHashesSchema.parse(hashes)

export const isEqualTransactionHash = isEqualSC

export const zeroTransactionHash = parseTransactionHash('0x' + '0'.repeat(64))

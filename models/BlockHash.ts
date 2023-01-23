import { z } from 'zod'

export const BlockHashSchema = z.string().regex(/^0x[A-Fa-f0-9]{64}$/)

export type BlockHash = z.infer<typeof BlockHashSchema>

export function validateBlockHash(hash: BlockHash) {
  return BlockHashSchema.parse(hash)
}

export function getBlockHashUid(hash: BlockHash): string {
  return hash
}

export const zeroBlockHash = validateBlockHash('0x' + '0'.repeat(64))

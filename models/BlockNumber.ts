import { z } from 'zod'

export const BlockNumberSchema = z.number().int().nonnegative()

export type BlockNumber = z.infer<typeof BlockNumberSchema>

export function parseBlockNumber(number: BlockNumber) {
  return BlockNumberSchema.parse(number)
}

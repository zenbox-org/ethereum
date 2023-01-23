import { z } from 'zod'
import { NaturalNumberSchema } from '../../generic/models/NaturalNumber'

export const BlockNumberSchema = NaturalNumberSchema

export type BlockNumber = z.infer<typeof BlockNumberSchema>

export function parseBlockNumber(number: BlockNumber) {
  return BlockNumberSchema.parse(number)
}

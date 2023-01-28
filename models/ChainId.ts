import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { isEqualSC } from 'libs/utils/lodash'
import { identity } from 'remeda'

export const ChainIdSchema = z.number().int().positive().describe('ChainId')

export const ChainIdsSchema = getArraySchema(ChainIdSchema, identity)

export type ChainId = z.infer<typeof ChainIdSchema>

export const parseChainId = (id: ChainId): ChainId => ChainIdSchema.parse(id)

export const parseChainIds = (s: ChainId[]): ChainId[] => ChainIdsSchema.parse(s)

export const isEqualChainId = isEqualSC

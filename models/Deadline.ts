import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { isEqualSC } from 'libs/utils/lodash'
import { identity } from 'lodash-es'
import { BN } from '../../bn'
import { MaxUint256 } from '../constants'
import { toSecondsN } from '../../utils/date'

export const DeadlineSchema = z.instanceof(BN)
  .refine(n => n.gte(toSecondsN(Date.now())), 'Must be greater or equal to current timestamp')
  .refine(n => n.lte(MaxUint256), 'Must be less or equal to max uint256')
  .describe('Deadline')

export const DeadlinesSchema = getArraySchema(DeadlineSchema, identity)

export type Deadline = z.infer<typeof DeadlineSchema>

export const parseDeadline = (deadline: Deadline): Deadline => DeadlineSchema.parse(deadline)

export const parseDeadlines = (s: Deadline[]): Deadline[] => DeadlinesSchema.parse(s)

export const isEqualDeadline = isEqualSC

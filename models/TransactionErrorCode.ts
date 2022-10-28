import { z } from 'zod'

export const TransactionErrorCodeSchema = z.enum([
  'Reverted',
  'Out of gas',
  // TODO: add more values
])

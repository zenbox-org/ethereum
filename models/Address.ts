import { getAddress as normalizeAddress } from 'ethers/lib/utils'
import { z } from 'zod'
import Error from 'next/error'

export type Address = string

export const AddressSchema = z.string().superRefine((value, ctx) => {
  try {
    normalizeAddress(value)
  } catch (error) {
    if (error instanceof Error) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: error.toString(),
      })
    } else {
      throw error
    }
  }
}).transform(normalizeAddress)

export interface Addressed { address: Address }

export function validateAddress(address: Address) {
  return AddressSchema.parse(address)
}

export function validateAddresses(addresses: Address[]) {
  return addresses.map(validateAddress)
}

export function getAddressUid(address: Address): string {
  return address
}

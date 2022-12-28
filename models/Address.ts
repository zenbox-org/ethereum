import { getAddress as normalizeAddress } from 'ethers/lib/utils'
import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'

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
}).transform(normalizeAddress).describe('Address')

export const AddressUidSchema = AddressSchema

export const AddressesSchema = getArraySchema(AddressSchema, parseAddressUid)

export interface WithAddress { address: Address }

export type Address = z.infer<typeof AddressSchema>

export type AddressUid = z.infer<typeof AddressUidSchema>

export function parseAddress(address: Address | string): Address {
  return AddressSchema.parse(address)
}

export function parseAddresses(addresss: (Address | string)[]): Address[] {
  return AddressesSchema.parse(addresss)
}

export function parseAddressUid(addressUid: AddressUid): AddressUid {
  return AddressUidSchema.parse(addressUid)
}

export const isEqualAddress = isEqualByDC(parseAddressUid)

export const toAddresses = (objects: WithAddress[]) => objects.map(o => o.address)

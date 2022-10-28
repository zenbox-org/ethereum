import { hexaString } from 'fast-check'

export function getAddressArbitrary() {
  // computeAddress(randomBytes(32).toString('hex'))
  return hexaString({ minLength: 40, maxLength: 40 }).map((hash) => '0x' + hash)
}

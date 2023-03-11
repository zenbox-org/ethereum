import { hexaString } from 'fast-check'

// computeAddress(randomBytes(32).toString('hex'))
export const addressArb = hexaString({ minLength: 40, maxLength: 40 }).map((hash) => '0x' + hash)

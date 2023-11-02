import { test } from '@jest/globals'
import { expect } from 'libs/chai/init'
import { parseTransactionHash, TransactionHashSchema } from './index'

test(parseTransactionHash.name, () => {
  expect(TransactionHashSchema.safeParse('0xdc911d697091321634370956148792f836971728e4cfefb11ff89bf845')).to.have.property('error')
  expect(TransactionHashSchema.safeParse('0xfe6755f1c1dad22770f9bcb867aae6c56c92e7eaecd10d431ce204f39de54b9e')).not.to.have.property('error')
})

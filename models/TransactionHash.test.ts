import { TransactionHashSchema, validateTransactionHash } from './TransactionHash'
import { expect } from 'libs/utils/chai'

test(validateTransactionHash.name, () => {
  expect(TransactionHashSchema.safeParse('0xdc911d697091321634370956148792f836971728e4cfefb11ff89bf845')).to.have.property('error')
  expect(TransactionHashSchema.safeParse('0xfe6755f1c1dad22770f9bcb867aae6c56c92e7eaecd10d431ce204f39de54b9e')).not.to.have.property('error')
})

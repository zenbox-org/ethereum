import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { BlockchainNetworkSchema, BlockchainNetworkUidSchema } from '../../blockchain/models/BlockchainNetwork'
import { NotesSchema } from '../../generic/models/Notes'
import { AddressSchema } from './Address'
import { ContractTypeSchema } from './ContractType'

export const ContractSchema = z.object({
  type: ContractTypeSchema,
  network: BlockchainNetworkSchema,
  address: AddressSchema,
  notes: NotesSchema,
})

export const ContractsSchema = z.array(ContractSchema)
  .superRefine(getDuplicatesRefinement('Contract', parseContractUid))

export const ContractUidSchema = z.object({
  network: BlockchainNetworkUidSchema,
  address: ContractSchema.shape.address,
})

export type Contract = z.infer<typeof ContractSchema>

export type ContractUid = z.infer<typeof ContractUidSchema>

export function validateContract(contract: Contract): Contract {
  return ContractSchema.parse(contract)
}

export function validateContracts(contracts: Contract[]): Contract[] {
  return ContractsSchema.parse(contracts)
}

export function parseContractUid(contractUid: ContractUid): ContractUid {
  return ContractUidSchema.parse(contractUid)
}

import { z } from 'zod'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { AssetSchema } from '../../finance/models/Asset'
import { ContractSchema, ContractUidSchema } from './Contract'

export const ContractAssetLinkSchema = z.object({
  contract: ContractSchema,
  asset: AssetSchema,
})

export const ContractAssetLinksSchema = z.array(ContractAssetLinkSchema)
  .superRefine(getDuplicatesRefinement('ContractAssetLink', parseContractAssetLinkUid))

export const ContractAssetLinkUidSchema = z.object({
  contract: ContractUidSchema,
})

export type ContractAssetLink = z.infer<typeof ContractAssetLinkSchema>

export type ContractAssetLinkUid = z.infer<typeof ContractAssetLinkUidSchema>

export function parseContractAssetLink(link: ContractAssetLink): ContractAssetLink {
  return ContractAssetLinkSchema.parse(link)
}

export function parseContractAssetLinks(links: ContractAssetLink[]): ContractAssetLink[] {
  return ContractAssetLinksSchema.parse(links)
}

export function parseContractAssetLinkUid(linkUid: ContractAssetLinkUid): ContractAssetLinkUid {
  return ContractAssetLinkUidSchema.parse(linkUid)
}

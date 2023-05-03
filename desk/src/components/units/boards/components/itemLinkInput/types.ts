import { TOpenGraph, TProduct } from '@/src/commons/types/generated/types'

export type ItemLinkInputProps = {
  title: string
  items: TProduct[] | undefined
  maxCount: number
  isRequired: boolean
  onItems: (items: ItemLinkType[]) => void
  errorMessage?: string | undefined
}

export type ItemLinkType = {
  id: number
  name: string
  url: string
  og: TOpenGraph
}

export type OpenGraphPreviewProps = {
  item: ItemLinkType
}

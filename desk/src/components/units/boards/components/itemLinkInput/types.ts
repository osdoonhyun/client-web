export type ItemLinkInputProps = {
  title: string
  maxCount: number
  isRequired: boolean
  onItems: (items: ItemLinkType[]) => void
  errorMessage?: string | undefined
}

export type ItemLinkType = {
  id: number
  name: string
  link: string
}

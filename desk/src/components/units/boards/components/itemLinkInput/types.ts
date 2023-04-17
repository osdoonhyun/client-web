export type ItemLinkInputProps = {
  title: string
  maxCount: number
  onItems: (items: ItemLinkType[]) => void
}

export type ItemLinkType = {
  id: number
  name: string
  link: string
}

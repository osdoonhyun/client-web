export type JobGroupInputProps = {
  title: string
  value?: string | undefined
  defaultValue?: string | undefined
  onItem: (item: JobGroupItemType) => void
}

export type JobGroupItemType = {
  group: string
  detail: string
}

export type TitleWithInputTagsProps = {
  type: 'input' | 'textarea'
  isRequired: boolean
  title: string
  value: string[]
  defaultValue?: string[]
  onChangeInputTags: (tags: string[]) => void
  errorMessage?: string | undefined
}

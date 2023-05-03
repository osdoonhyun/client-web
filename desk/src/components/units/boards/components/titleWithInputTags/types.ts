import { THashtag } from '@/src/commons/types/generated/types'

export type TitleWithInputTagsProps = {
  type: 'input' | 'textarea'
  isRequired: boolean
  tags: THashtag[] | undefined
  title: string
  value: string[]
  defaultValue?: string[]
  onChangeInputTags: (tags: string[]) => void
  errorMessage?: string | undefined
}

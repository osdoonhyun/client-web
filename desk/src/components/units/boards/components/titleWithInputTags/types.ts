import { SelectProps } from 'antd'

export type TitleWithInputTagsProps = {
  type: 'input' | 'textarea'
  isRequired: boolean
  title: string
  value: string[]
  defaultValue?: string
  placeholder?: string
  options?: SelectProps['options']
  onChangeInputTags: (value: string) => void
  errorMessage?: string | undefined
}

import { SelectProps } from 'antd'

export type JobGroupInputProps = {
  title: string
  value?: string | undefined
  defaultValue?: string | undefined
  onItem: (item: JobGroupItemType) => void
  options?: SelectProps['options']
}

export type JobGroupItemType = {
  group: string
  detail: string
}

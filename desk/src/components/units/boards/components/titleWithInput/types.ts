import { ChangeEvent } from 'react'

export type TitleWithInputProps = {
  type: 'input' | 'textarea'
  isRequired: boolean
  title: string
  value: string | undefined
  readonly?: boolean
  inputHeight?: number
  maxLength?: number
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void
  errorMessage?: string | undefined
}

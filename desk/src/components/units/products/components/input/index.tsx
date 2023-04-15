import { Input, Text, Textarea } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

export type TitleWithInputProps = {
  type: 'input' | 'textarea'
  isRequired: boolean
  title: string
  value: string
  defaultValue?: string
  readonly?: boolean
  inputHeight?: number
  maxLength?: number
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void
}

export default function TitleWithInput(props: TitleWithInputProps) {
  return (
    <>
      <Text fontSize={14} fontWeight={700} color={'dGray.dark'} mb="8px">
        {props.title}
        {props.isRequired && (
          <span style={{ color: '#666CFF', fontSize: '14px' }}>*</span>
        )}
      </Text>
      {props.type === 'input' ? (
        <Input
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChangeInput}
          readOnly={props.readonly ?? false}
          size="md"
          color={'dBlack'}
          focusBorderColor="dPrimary"
          maxLength={props.maxLength}
        />
      ) : (
        <Textarea
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChangeInput}
          readOnly={props.readonly ?? false}
          size="md"
          height={props.inputHeight}
          resize={'none'}
          focusBorderColor="dPrimary"
          maxLength={props.maxLength}
        />
      )}
    </>
  )
}

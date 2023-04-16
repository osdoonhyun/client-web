import ErrorMessage from '@/src/components/ui/errorMessage'
import { Input, Text, Textarea } from '@chakra-ui/react'
import { TitleWithInputProps } from './types'

export default function TitleWithInput(props: TitleWithInputProps) {
  return (
    <>
      <Text fontSize={16} fontWeight={700} color={'dGray.dark'} mb="8px">
        {props.title}
        {props.isRequired && (
          <span style={{ color: 'dPrimary', fontSize: '14px' }}>{' *'}</span>
        )}
      </Text>
      {props.type === 'input' ? (
        <>
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
          <ErrorMessage message={props.errorMessage} />
        </>
      ) : (
        <>
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
          <ErrorMessage message={props.errorMessage} />
        </>
      )}
    </>
  )
}

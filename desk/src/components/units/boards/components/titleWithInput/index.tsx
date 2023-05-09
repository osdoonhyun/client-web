import ErrorMessage from '@/src/components/ui/errorMessage'
import { Input, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import { TitleWithInputProps } from './types'

export default function TitleWithInput(props: TitleWithInputProps) {
  return (
    <>
      <Text
        fontSize={16}
        fontWeight={700}
        color={useColorModeValue('dGray.dark', 'dGray.light')}
        mb="8px">
        {props.title}
        {props.isRequired && (
          <span style={{ color: '#666CFF', fontSize: '14px' }}>{' *'}</span>
        )}
      </Text>
      {props.type === 'input' ? (
        <>
          <Input
            bgColor={useColorModeValue('dGray.light', '#bababa1e')}
            color={useColorModeValue('dBlack', 'dGray.light')}
            value={props.value}
            onChange={props.onChangeInput}
            readOnly={props.readonly ?? false}
            size="md"
            focusBorderColor="dPrimary"
            maxLength={props.maxLength}
            placeholder={`${props.maxLength}자까지 입력 가능합니다.`}
            _placeholder={{ color: 'dGray.medium' }}
          />
          <ErrorMessage message={props.errorMessage} />
        </>
      ) : (
        <>
          <Textarea
            id="desk-textarea"
            bgColor={useColorModeValue('dGray.light', '#bababa1e')}
            color={useColorModeValue('dBlack', 'dGray.light')}
            value={props.value}
            onChange={props.onChangeInput}
            readOnly={props.readonly ?? false}
            size="md"
            height={props.inputHeight}
            resize={'none'}
            focusBorderColor="dPrimary"
            maxLength={props.maxLength}
            placeholder={`${props.maxLength}자까지 입력 가능합니다.`}
            _placeholder={{ color: 'dGray.medium' }}
          />
          <ErrorMessage message={props.errorMessage} />
        </>
      )}
    </>
  )
}

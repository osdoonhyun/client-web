import ErrorMessage from '@/src/components/ui/errorMessage'
import { Input, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import { TitleWithInputProps } from './types'

export default function TitleWithInput(props: TitleWithInputProps) {
  return (
    <>
      <Text
        fontSize={16}
        fontWeight={700}
        color={useColorModeValue('dGray.dark', 'dGray.medium')}
        mb="8px">
        {props.title}
        {props.isRequired && (
          <span style={{ color: '#666CFF', fontSize: '14px' }}>{' *'}</span>
        )}
      </Text>
      {props.type === 'input' ? (
        <>
          <Input
            bgColor={'white'}
            color={'black'}
            value={props.value}
            defaultValue={props.defaultValue}
            onChange={props.onChangeInput}
            readOnly={props.readonly ?? false}
            size="md"
            focusBorderColor="dPrimary"
            maxLength={props.maxLength}
            _placeholder={{ color: 'dGray.medium' }}
          />
          <ErrorMessage message={props.errorMessage} />
        </>
      ) : (
        <>
          <Textarea
            bgColor={'white'}
            color={'black'}
            value={props.value}
            defaultValue={props.defaultValue}
            onChange={props.onChangeInput}
            readOnly={props.readonly ?? false}
            size="md"
            height={props.inputHeight}
            resize={'none'}
            focusBorderColor="dPrimary"
            maxLength={props.maxLength}
            _placeholder={{ color: 'dGray.medium' }}
          />
          <ErrorMessage message={props.errorMessage} />
        </>
      )}
    </>
  )
}

import ErrorMessage from '@/src/components/ui/errorMessage'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { Select } from 'antd'
import { TitleWithInputTagsProps } from './types'

export default function TitleWithInputTags(props: TitleWithInputTagsProps) {
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
      <Select
        mode="tags"
        style={{ width: '100%' }}
        size="large"
        placeholder={props.placeholder}
        onChange={props.onChangeInputTags}
        options={props.options}
      />
      <ErrorMessage message={props.errorMessage} />
    </>
  )
}

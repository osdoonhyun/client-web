import { Text } from '@chakra-ui/react'
import { ErrorMessageProps } from './types'

export default function ErrorMessage(props: ErrorMessageProps) {
  return (
    <Text fontSize={'14px'} color={'dRed.500'} pt={'4px'}>
      {props.message}
    </Text>
  )
}

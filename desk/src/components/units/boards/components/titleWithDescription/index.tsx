import { Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { TitleWithDescriptionProps } from './types'

export default function TitleWithDescription(props: TitleWithDescriptionProps) {
  return (
    <Stack bg={'white'} boxShadow={'lg'} p={8} rounded={'xl'}>
      <Text
        fontSize={18}
        fontWeight={800}
        color={useColorModeValue('dGray.dark', 'dGray.medium')}
        pt={'10px'}>
        {props.title}
      </Text>
      <Text fontSize={16} fontWeight={400} color={'dBlack'} pt={'10px'}>
        {props.description}
      </Text>
    </Stack>
  )
}

import { Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { TitleWithDescriptionProps } from './types'

export default function TitleWithDescription(props: TitleWithDescriptionProps) {
  return (
    <Stack
      bg={'white'}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      bgColor={useColorModeValue('dGray.light', '#bababa1e')}>
      <Text
        fontSize={18}
        fontWeight={800}
        color={useColorModeValue('dBlack', 'dGray.light')}>
        {props.title}
      </Text>
      <Text
        fontSize={16}
        fontWeight={400}
        color={useColorModeValue('dBlack', 'dGray.light')}>
        {props.description}
      </Text>
    </Stack>
  )
}

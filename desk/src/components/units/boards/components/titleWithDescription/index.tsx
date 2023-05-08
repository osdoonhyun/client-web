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
        fontSize={{ base: 'lg', lg: 'xl' }}
        fontWeight={800}
        color={useColorModeValue('dBlack', 'dGray.light')}>
        {props.title}
      </Text>
      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        fontWeight={400}
        color={useColorModeValue('dBlack', 'dGray.light')}>
        {props.description}
      </Text>
    </Stack>
  )
}

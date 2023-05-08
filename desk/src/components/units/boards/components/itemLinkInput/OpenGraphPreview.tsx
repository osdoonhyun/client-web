import { HStack, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { OpenGraphPreviewProps } from './types'

export default function OpenGraphPreview(props: OpenGraphPreviewProps) {
  return (
    <HStack justify={'stretch'}>
      {Object.keys(props.item.og).length !== 0 && (
        <HStack
          justify={'stretch'}
          w={'100%'}
          h={'100px'}
          borderRadius={'6px'}
          border={'1px solid'}
          color={useColorModeValue('dBlack', 'dGray.light')}
          borderColor={useColorModeValue('gray.200', '#bababa1e')}>
          <VStack align={'flex-start'} width={'70%'} p={'16px'}>
            <Text fontSize={{ base: 'sm', md: '16px' }} fontWeight={500} noOfLines={1}>
              {props.item.og.name}
            </Text>
            <Text
              fontSize={{ base: 'xs', md: '14px' }}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}
              noOfLines={1}>
              {props.item.og.description}
            </Text>
            <Text fontSize={{ base: 'xs', md: '14px' }} pt={'8px'} noOfLines={1}>
              {props.item.og.url}
            </Text>
          </VStack>
          <Image
            height={'98%'}
            width={'30%'}
            objectFit={'cover'}
            src={props.item.og.imageUrl ?? ''}
            borderRadius="lg"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          />
        </HStack>
      )}
    </HStack>
  )
}

import { Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { AiOutlineEye } from 'react-icons/ai'
import { CountStateWithLikeProps } from './types'

export default function CountStateWithLike(props: CountStateWithLikeProps) {
  return (
    <>
      <Flex justify={'flex-end'} align={'center'}>
        <HStack>
          <AiOutlineEye />
          <Text
            fontSize={16}
            fontWeight={600}
            color={useColorModeValue('dGray.dark', 'dGray.medium')}>
            {props.views}
          </Text>
        </HStack>
      </Flex>
    </>
  )
}

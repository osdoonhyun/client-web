import { formatNumber } from '@/src/commons/utils/util'
import { Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { AiOutlineEye } from 'react-icons/ai'
import { CountStateWithLikeProps } from './types'

export default function CountStateWithLike(props: CountStateWithLikeProps) {
  return (
    <>
      <Flex justify={'flex-end'} align={'center'} mr={2}>
        <HStack>
          <AiOutlineEye />
          <Text
            fontSize={{ base: 'sm' }}
            fontWeight={600}
            color={useColorModeValue('dGray.dark', 'dGray.medium')}>
            {formatNumber(props.views)}
          </Text>
        </HStack>
      </Flex>
    </>
  )
}

import { Flex, HStack, Tag, useColorModeValue } from '@chakra-ui/react'
import { DetailBoardTagsProps } from './types'

export default function DetailBoardTags(props: DetailBoardTagsProps) {
  return (
    <Flex justify={'flex-start'} align={'center'}>
      <HStack>
        {props.hashTags?.map((tag, index) => (
          <Tag
            key={index}
            fontSize={14}
            fontWeight={600}
            color={useColorModeValue('dGray.dark', 'dGray.medium')}>
            {tag}
          </Tag>
        ))}
      </HStack>
    </Flex>
  )
}

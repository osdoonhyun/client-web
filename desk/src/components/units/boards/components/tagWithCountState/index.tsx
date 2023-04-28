import { Flex, HStack, Tag, Text, useColorModeValue } from '@chakra-ui/react'
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { TagWithCountStateProps } from './types'

export default function TagWithCountState(props: TagWithCountStateProps) {
  return (
    <>
      <Flex justify={'space-between'} align={'center'}>
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
        <HStack spacing={2}>
          <HStack>
            <AiOutlineHeart />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              {props.likes}
            </Text>
          </HStack>
          <HStack>
            <AiOutlineEye />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              {props.views}
            </Text>
          </HStack>
          <HStack>
            <AiOutlineComment />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              {props.comments}
            </Text>
          </HStack>
        </HStack>
      </Flex>
    </>
  )
}

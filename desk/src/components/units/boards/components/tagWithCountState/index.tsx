import { Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart, IconName } from 'react-icons/ai'

export default function TagWithCountState() {
  const testTags = ['개발자데스크셋업', '학생데스크셋업']

  const makeTags = testTags.map(tag => `#${tag}`)

  return (
    <>
      <Flex justify={'space-between'} align={'center'}>
        {/* Tag 들어갈 예정 */}

        <HStack>
          {makeTags.map((tag, index) => (
            <Text
              key={index}
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              {tag}
            </Text>
          ))}
        </HStack>
        <HStack spacing={6}>
          <HStack>
            <AiOutlineHeart />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              좋아요수
            </Text>
          </HStack>
          <HStack>
            <AiOutlineEye />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              조회수
            </Text>
          </HStack>
          <HStack>
            <AiOutlineComment />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              댓글수
            </Text>
          </HStack>
        </HStack>
      </Flex>
    </>
  )
}

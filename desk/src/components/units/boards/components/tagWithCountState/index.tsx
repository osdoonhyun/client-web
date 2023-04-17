import { CommentOutlined, HeartOutlined, RiseOutlined } from '@ant-design/icons'
import { Flex, HStack, Text } from '@chakra-ui/react'

export default function TagWithCountState() {
  const testTags = ['개발자데스크셋업', '학생데스크셋업']

  const makeTags = testTags.map(tag => `#${tag}`)

  return (
    <>
      <Flex justify={'space-between'} align={'center'}>
        {/* Tag 들어갈 예정 */}

        <HStack>
          {makeTags.map((tag, index) => (
            <Text key={index} fontSize={14} fontWeight={600} color={'dBlack'}>
              {tag}
            </Text>
          ))}
        </HStack>
        <HStack spacing={6}>
          <HStack>
            <HeartOutlined />
            <Text fontSize={14} fontWeight={600} color={'rgba(35, 35, 35, 0.7)'}>
              좋아요수
            </Text>
          </HStack>
          <HStack>
            <RiseOutlined />
            <Text fontSize={14} fontWeight={600} color={'rgba(35, 35, 35, 0.7)'}>
              조회수
            </Text>
          </HStack>
          <HStack>
            <CommentOutlined />
            <Text fontSize={14} fontWeight={600} color={'rgba(35, 35, 35, 0.7)'}>
              댓글수
            </Text>
          </HStack>
        </HStack>
      </Flex>
    </>
  )
}

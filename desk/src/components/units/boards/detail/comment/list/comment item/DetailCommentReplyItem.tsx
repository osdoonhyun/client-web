import {
  Avatar,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

type DetailCommentReplyItemProps = {}

export default function DetailCommentReplyItem(props: DetailCommentReplyItemProps) {
  return (
    <VStack align={'stretch'}>
      <HStack spacing={'12px'} justifyContent={'space-between'} pt={'10px'}>
        <HStack spacing={'16px'}>
          <Avatar w={'34px'} h={'34px'} src={'https://bit.ly/broken-link'} />
          <Text
            fontWeight={700}
            fontSize={16}
            color={useColorModeValue('dBlack', 'dGray.light')}>
            닉네임
          </Text>
        </HStack>
        <Text
          fontSize={14}
          fontWeight={300}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          2023.5.1
          {/* {getConvertedDate(props.createdAt)} */}
        </Text>
      </HStack>
      <Text
        pl={'52px'}
        fontWeight={500}
        fontSize={16}
        color={useColorModeValue('dBlack', 'dGray.light')}>
        댓글내용 (ex. 키크론 구매 고민중인데 타건감 괜찮나요??)
      </Text>
      <HStack justify={'flex-end'}>
        <Button variant={'ghost'} size={'xs'} color={'dRed.400'}>
          삭제
        </Button>
      </HStack>
      <Divider pt={'10px'} />
    </VStack>
  )
}

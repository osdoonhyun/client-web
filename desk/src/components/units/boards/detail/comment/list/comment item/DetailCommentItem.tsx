import {
  Avatar,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import DetailCommentReplyListItem from './DetailCommentReplyList'

export default function DetailCommentItem() {
  const [isOpenReply, setIsOpenReply] = useState(false)

  const onClickShowReply = () => {
    setIsOpenReply(isOpen => !isOpen)
  }

  return (
    <VStack pt={'20px'} spacing={'16px'} align={'stretch'}>
      <HStack spacing={'12px'} justifyContent={'space-between'}>
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
      <VStack pl={'52px'} spacing={'16px'} align={'stretch'}>
        <Text
          fontWeight={500}
          fontSize={16}
          color={useColorModeValue('dBlack', 'dGray.light')}>
          댓글내용 (ex. 키크론 구매 고민중인데 타건감 괜찮나요??)
        </Text>
        <HStack justify={'space-between'}>
          <Button variant={'outline'} size={'xs'} onClick={onClickShowReply}>
            답글 2
          </Button>
          <Button variant={'ghost'} size={'xs'} color={'dRed.400'}>
            삭제
          </Button>
        </HStack>
        {/* 대댓글 */}
        <DetailCommentReplyListItem isOpenReply={isOpenReply} />
      </VStack>
      <Divider pt={'10px'} />
    </VStack>
  )
}

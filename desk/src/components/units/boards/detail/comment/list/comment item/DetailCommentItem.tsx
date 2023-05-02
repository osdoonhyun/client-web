import { getDatetoRelative } from '@/src/commons/utils/util'
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
import { DetailCommentItemProps } from '../DetailCommentList.types'
import DetailCommentReplyListItem from './DetailCommentReplyList'

export default function DetailCommentItem(props: DetailCommentItemProps) {
  const commentData = props.commentData
  const [isOpenReply, setIsOpenReply] = useState(false)

  const onClickShowReply = () => {
    setIsOpenReply(isOpen => !isOpen)
  }

  return (
    <VStack pt={'20px'} spacing={'12px'} align={'stretch'}>
      <HStack spacing={'12px'} justifyContent={'space-between'}>
        <HStack spacing={'16px'}>
          <Avatar w={'34px'} h={'34px'} src={'https://bit.ly/broken-link'} />
          <Text
            fontWeight={700}
            fontSize={16}
            color={useColorModeValue('dBlack', 'dGray.light')}>
            {commentData.user.nickName}
          </Text>
        </HStack>
        <Text
          fontSize={14}
          fontWeight={300}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          {getDatetoRelative(commentData.createdAt)}
        </Text>
      </HStack>
      <VStack pl={'52px'} spacing={'12px'} align={'stretch'}>
        <Text
          fontWeight={500}
          fontSize={16}
          color={useColorModeValue('dBlack', 'dGray.light')}>
          {commentData.content}
        </Text>
        <HStack justify={'space-between'}>
          <Button variant={'outline'} size={'xs'} onClick={onClickShowReply}>
            {`답글 ${
              (commentData.replies?.length ?? 0) === 0 ? '' : commentData.replies?.length
            }`}
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

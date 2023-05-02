import { getDateToRelative } from '@/src/commons/utils/util'
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { DetailCommentReplyItemProps } from '../DetailCommentList.types'
import React from 'react'

function DetailCommentReplyItem(props: DetailCommentReplyItemProps) {
  return (
    <VStack align={'stretch'}>
      <HStack spacing={'12px'} justifyContent={'space-between'} pt={'10px'}>
        <HStack spacing={'16px'}>
          <Avatar w={'34px'} h={'34px'} src={'https://bit.ly/broken-link'} />
          <Text
            fontWeight={700}
            fontSize={16}
            color={useColorModeValue('dBlack', 'dGray.light')}>
            {props.reply.user.nickName}
          </Text>
        </HStack>
        <Text
          fontSize={14}
          fontWeight={300}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          {getDateToRelative(props.reply.createdAt)}
        </Text>
      </HStack>
      <Text
        pl={'52px'}
        fontWeight={500}
        fontSize={16}
        color={useColorModeValue('dBlack', 'dGray.light')}>
        {props.reply.content}
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

export default React.memo(DetailCommentReplyItem)

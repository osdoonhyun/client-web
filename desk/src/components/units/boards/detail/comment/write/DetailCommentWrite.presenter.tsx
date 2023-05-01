import {
  Avatar,
  Button,
  Divider,
  HStack,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { BoardDetailCommentWriteUIProps } from './DetailCommentWrite.types'

export default function BoardDetailCommentWriteUI(props: BoardDetailCommentWriteUIProps) {
  return (
    <VStack align={'stretch'}>
      <Divider mt={'80px'} mb={'50px'} />
      <HStack>
        <Text
          fontSize={16}
          fontWeight={700}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          댓글
        </Text>
        <Text fontSize={16} fontWeight={700} color={'dPrimary'}>
          {props.commentDatas.length}
        </Text>
      </HStack>
      <HStack pt={'10px'} spacing={'16px'}>
        <Avatar w={'34px'} h={'34px'} src={'https://bit.ly/broken-link'} />
        <Input
          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
          color={useColorModeValue('dBlack', 'dGray.light')}
          value={props.comment}
          onChange={props.onChangeInputComment}
          size="md"
          focusBorderColor="dPrimary"
          placeholder={`칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:)`}
          _placeholder={{ color: 'dGray.medium' }}
        />
        <Button
          bgColor={'dPrimary'}
          color={'dGray.light'}
          isLoading={props.isCommentLoading}
          onClick={props.onClickCreateComment}>
          입력
        </Button>
      </HStack>
    </VStack>
  )
}

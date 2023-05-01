import {
  Avatar,
  Button,
  HStack,
  Input,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import DetailCommentReplyItem from './DetailCommentReplyItem'

type DetailCommentReplyListProps = {
  isOpenReply: boolean
}

export default function DetailCommentReplyList(props: DetailCommentReplyListProps) {
  return (
    <>
      {props.isOpenReply && (
        <VStack align={'stretch'}>
          {/* 대댓글 */}
          <DetailCommentReplyItem />
          <DetailCommentReplyItem />
          {/* 대댓글 입력 */}
          <HStack spacing={'16px'} pt={'20px'}>
            <Avatar w={'34px'} h={'34px'} src={'https://bit.ly/broken-link'} />
            <Input
              bgColor={useColorModeValue('dGray.light', '#bababa1e')}
              color={useColorModeValue('dBlack', 'dGray.light')}
              // value={props.value}
              // onChange={props.onChangeInput}
              focusBorderColor="dPrimary"
              placeholder={`칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:)`}
              _placeholder={{ color: 'dGray.medium' }}
            />
            <Button bgColor={'dPrimary'} color={'dGray.light'}>
              입력
            </Button>
          </HStack>
        </VStack>
      )}
    </>
  )
}

import { useAuth } from '@/src/commons/hooks/useAuth'
import { replyCommentState } from '@/src/commons/store/atom'
import {
  Avatar,
  Button,
  HStack,
  Input,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { DetailCommentReplyListProps } from '../DetailCommentList.types'
import DetailCommentReplyItem from './DetailCommentReplyItem'

export default function DetailCommentReplyList(props: DetailCommentReplyListProps) {
  const { isLoggedIn } = useAuth()
  const [replyComment, setReplyComment] = useRecoilState(replyCommentState)

  const onChangeInputReplyComment = (event: ChangeEvent<HTMLInputElement>) => {
    setReplyComment(event.target.value)
  }

  return (
    <>
      {props.isOpenReply ? (
        <VStack align={'stretch'} pt={'10px'}>
          {/* 대댓글 */}
          {props.replyDatas.map(reply => (
            <DetailCommentReplyItem
              key={reply.id}
              commentId={props.commentId}
              reply={reply}
              onClickDeleteReplyComment={props.onClickDeleteReplyComment}
            />
          ))}
          {/* 대댓글 입력 */}
          <HStack spacing={'16px'} pt={'20px'}>
            <Avatar w={'34px'} h={'34px'} src={'https://bit.ly/broken-link'} />
            <Input
              bgColor={useColorModeValue('dGray.light', '#bababa1e')}
              color={useColorModeValue('dBlack', 'dGray.light')}
              value={replyComment}
              onChange={onChangeInputReplyComment}
              focusBorderColor="dPrimary"
              isDisabled={!isLoggedIn}
              placeholder={
                isLoggedIn
                  ? `칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:)`
                  : '댓글을 작성하려면 로그인을 해주세요.'
              }
              _placeholder={{ color: 'dGray.medium' }}
            />
            <Button
              bgColor={'dPrimary'}
              color={'dGray.light'}
              isDisabled={!isLoggedIn}
              isLoading={props.isReplyLoading}
              onClick={props.onClickCreateReplyComment(props.commentId)}>
              입력
            </Button>
          </HStack>
        </VStack>
      ) : (
        <></>
      )}
    </>
  )
}

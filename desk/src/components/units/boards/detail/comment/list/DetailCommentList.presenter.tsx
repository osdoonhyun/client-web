import { VStack } from '@chakra-ui/react'
import { BoardDetailCommentListUIProps } from './DetailCommentList.types'
import DetailCommentItem from './commentItem/DetailCommentItem'

export default function BoardDetailCommentListUI(props: BoardDetailCommentListUIProps) {
  return (
    <VStack align={'stretch'} pt={'20px'}>
      {props.commentDatas.map(comment => (
        <DetailCommentItem
          key={comment.id}
          isReplyLoading={props.isReplyLoading}
          commentData={comment}
          onClickCreateReplyComment={props.onClickCreateReplyComment}
          onClickDeleteComment={props.onClickDeleteComment}
          onClickDeleteReplyComment={props.onClickDeleteReplyComment}
        />
      ))}
    </VStack>
  )
}

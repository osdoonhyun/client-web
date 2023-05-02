import { VStack } from '@chakra-ui/react'
import { BoardDetailCommentListUIProps } from './DetailCommentList.types'
import DetailCommentItem from './comment item/DetailCommentItem'

export default function BoardDetailCommentListUI(props: BoardDetailCommentListUIProps) {
  return (
    <VStack align={'stretch'} pt={'20px'}>
      {props.commentDatas.map(comment => (
        <DetailCommentItem
          key={comment.id}
          commentData={comment}
          onClickDeleteComment={props.onClickDeleteComment}
        />
      ))}
    </VStack>
  )
}

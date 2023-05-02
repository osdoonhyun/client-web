import { VStack } from '@chakra-ui/react'
import DetailCommentItem from './comment item/DetailCommentItem'
import { BoardDetailCommentListUIProps } from './DetailCommentList.types'

export default function BoardDetailCommentListUI(props: BoardDetailCommentListUIProps) {
  return (
    <VStack align={'stretch'} pt={'20px'}>
      {props.commentDatas.map(comment => (
        <DetailCommentItem key={comment.id} commentData={comment} />
      ))}
    </VStack>
  )
}

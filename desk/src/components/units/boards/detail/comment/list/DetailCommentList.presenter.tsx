import { VStack } from '@chakra-ui/react'
import DetailCommentItem from './comment item/DetailCommentItem'

export default function BoardDetailCommentListUI() {
  return (
    <VStack align={'stretch'} pt={'20px'}>
      <DetailCommentItem />
      <DetailCommentItem />
      <DetailCommentItem />
    </VStack>
  )
}

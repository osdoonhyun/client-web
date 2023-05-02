import { TMutation } from '@/src/commons/types/generated/types'
import { useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import BoardDetailCommentListUI from './DetailCommentList.presenter'
import { DELETE_COMMENT } from './DetailCommentList.queries'
import { BoardDetailCommentListProps } from './DetailCommentList.types'

export default function BoardDetailCommentList(props: BoardDetailCommentListProps) {
  const toast = useToast()
  const [deleteComment] = useMutation<Pick<TMutation, 'deleteComment'>>(DELETE_COMMENT)

  const onClickDeleteComment = (commentId: string) => async () => {
    await deleteComment({ variables: { commentid: commentId } })
      .then(() => {
        props.setCommentDatas(comments =>
          comments.filter(comment => comment.id !== commentId),
        )
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({ title: '에러', description: `${error.message}`, status: 'error' })
        }
      })
  }

  return (
    <BoardDetailCommentListUI
      commentDatas={props.commentDatas}
      onClickDeleteComment={onClickDeleteComment}
    />
  )
}

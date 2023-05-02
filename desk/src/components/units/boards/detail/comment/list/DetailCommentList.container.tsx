import { replyCommentState } from '@/src/commons/store/atom'
import { TMutation } from '@/src/commons/types/generated/types'
import { useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { produce } from 'immer'
import { MouseEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import BoardDetailCommentListUI from './DetailCommentList.presenter'
import {
  CREATE_REPLY_COMMENT,
  DELETE_COMMENT,
  DELETE_REPLY_COMMENT,
} from './DetailCommentList.queries'
import { BoardDetailCommentListProps } from './DetailCommentList.types'

export default function BoardDetailCommentList(props: BoardDetailCommentListProps) {
  const toast = useToast()
  const [isReplyLoading, setIsReplyLoading] = useState(false)
  const [replyComment, setReplyComment] = useRecoilState(replyCommentState)

  const [createReplyComment] =
    useMutation<Pick<TMutation, 'createReply'>>(CREATE_REPLY_COMMENT)
  const [deleteComment] = useMutation<Pick<TMutation, 'deleteComment'>>(DELETE_COMMENT)
  const [deleteReplyComment] =
    useMutation<Pick<TMutation, 'deleteReply'>>(DELETE_REPLY_COMMENT)

  const onClickCreateReplyComment =
    (commentId: string) => async (event: MouseEvent<HTMLButtonElement>) => {
      if (replyComment === '') {
        return
      }

      setIsReplyLoading(true)

      await createReplyComment({
        variables: {
          createReplyInput: {
            commentid: commentId,
            content: replyComment,
          },
        },
      })
        .then(res => {
          setReplyComment('')

          props.setCommentDatas(comments =>
            produce(comments, draft => {
              const index = comments.findIndex(comment => comment.id === commentId)

              draft[index].replies = [
                res.data!.createReply,
                ...(comments[index].replies ?? []),
              ]
            }),
          )
        })
        .catch(error => {
          if (error instanceof Error) {
            toast({ title: '에러', description: `${error.message}`, status: 'error' })
          }
        })
        .finally(() => setIsReplyLoading(false))
    }

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

  const onClickDeleteReplyComment = (commentId: string, replyId: string) => async () => {
    await deleteReplyComment({ variables: { replyid: replyId } })
      .then(() => {
        props.setCommentDatas(comments =>
          produce(comments, draft => {
            const index = comments.findIndex(comment => comment.id === commentId)
            draft[index].replies = draft[index].replies?.filter(
              reply => reply.id !== replyId,
            )
          }),
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
      isReplyLoading={isReplyLoading}
      commentDatas={props.commentDatas}
      onClickCreateReplyComment={onClickCreateReplyComment}
      onClickDeleteComment={onClickDeleteComment}
      onClickDeleteReplyComment={onClickDeleteReplyComment}
    />
  )
}

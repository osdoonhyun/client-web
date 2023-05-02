import {
  TMutation,
  TMutationCreateCommentArgs,
} from '@/src/commons/types/generated/types'
import { useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import BoardDetailCommentWriteUI from './DetailCommentWrite.presenter'
import { CREATE_COMMENT } from './DetailCommentWrite.queries'
import { BoardDetailCommentWriteProps } from './DetailCommentWrite.types'

export default function BoardDetailCommentWrite(props: BoardDetailCommentWriteProps) {
  const toast = useToast()
  const [isCommentLoading, setIsCommentLoading] = useState(false)
  const [comment, setComment] = useState('')
  const [createComment] = useMutation<
    Pick<TMutation, 'createComment'>,
    TMutationCreateCommentArgs
  >(CREATE_COMMENT)

  const onChangeInputComment = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  const onClickCreateComment = async (event: MouseEvent<HTMLButtonElement>) => {
    if (comment === '') {
      return
    }

    setIsCommentLoading(true)

    await createComment({
      variables: {
        createCommentInput: {
          boardid: props.boardId,
          content: comment,
        },
      },
    })
      .then(res => {
        setComment('')
        // 작업해야됨
        res.data?.createComment
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({ title: '에러', description: `${error.message}`, status: 'error' })
        }
      })
      .finally(() => {
        setIsCommentLoading(false)
      })
  }

  return (
    <BoardDetailCommentWriteUI
      isCommentLoading={isCommentLoading}
      userData={props.userData}
      commentDatas={props.commentDatas}
      comment={comment}
      onChangeInputComment={onChangeInputComment}
      onClickCreateComment={onClickCreateComment}
    />
  )
}

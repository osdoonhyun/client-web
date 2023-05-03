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
import { produce } from 'immer'

export default function BoardDetailCommentWrite(props: BoardDetailCommentWriteProps) {
  const toast = useToast()
  const [isCommentLoading, setIsCommentLoading] = useState(false)
  const [inputComment, setInputComment] = useState('')

  const [createComment] = useMutation<
    Pick<TMutation, 'createComment'>,
    TMutationCreateCommentArgs
  >(CREATE_COMMENT)

  const onChangeInputComment = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputComment(event.target.value)
  }, [])

  const onClickCreateComment = async () => {
    if (inputComment === '') {
      return
    }

    setIsCommentLoading(true)

    await createComment({
      variables: {
        createCommentInput: {
          boardid: props.boardId,
          content: inputComment,
        },
      },
    })
      .then(res => {
        setInputComment('')

        props.setCommentDatas(comments =>
          produce(comments, draft => {
            draft.splice(0, 0, res.data!.createComment)
          }),
        )
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({ title: '에러', description: `${error.message}`, status: 'error' })
        }
      })
      .finally(() => setIsCommentLoading(false))
  }

  return (
    <BoardDetailCommentWriteUI
      isCommentLoading={isCommentLoading}
      userData={props.userData}
      commentsCount={props.commentDatas.length}
      inputComment={inputComment}
      onChangeInputComment={onChangeInputComment}
      onClickCreateComment={onClickCreateComment}
    />
  )
}

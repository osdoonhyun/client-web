import { TComments } from '@/src/commons/types/generated/types'
import { ChangeEvent, MouseEvent } from 'react'

export type BoardDetailCommentWriteProps = {
  boardId: string
  commentDatas: Array<TComments>
}

export type BoardDetailCommentWriteUIProps = {
  isCommentLoading: boolean
  commentDatas: Array<TComments>
  comment: string
  onChangeInputComment: (event: ChangeEvent<HTMLInputElement>) => void
  onClickCreateComment: (event: MouseEvent<HTMLButtonElement>) => void
}

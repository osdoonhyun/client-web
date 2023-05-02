import { TComments, TUser } from '@/src/commons/types/generated/types'
import { ChangeEvent, MouseEvent } from 'react'

export type BoardDetailCommentWriteProps = {
  boardId: string
  userData: TUser
  commentDatas: Array<TComments>
}

export type BoardDetailCommentWriteUIProps = {
  isCommentLoading: boolean
  userData: TUser
  commentDatas: Array<TComments>
  comment: string
  onChangeInputComment: (event: ChangeEvent<HTMLInputElement>) => void
  onClickCreateComment: (event: MouseEvent<HTMLButtonElement>) => void
}

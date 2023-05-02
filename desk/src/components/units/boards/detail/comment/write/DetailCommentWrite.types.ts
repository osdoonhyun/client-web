import { TComments, TUser } from '@/src/commons/types/generated/types'
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'

export type BoardDetailCommentWriteProps = {
  boardId: string
  userData: TUser
  commentDatas: Array<TComments>
  setCommentDatas: Dispatch<SetStateAction<TComments[]>>
}

export type BoardDetailCommentWriteUIProps = {
  isCommentLoading: boolean
  userData: TUser
  commentsCount: number
  inputComment: string
  onChangeInputComment: (event: ChangeEvent<HTMLInputElement>) => void
  onClickCreateComment: (event: MouseEvent<HTMLButtonElement>) => void
}

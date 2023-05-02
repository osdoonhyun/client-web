import { TComments } from '@/src/commons/types/generated/types'
import { Dispatch, SetStateAction } from 'react'

export type BoardDetailCommentListProps = {
  commentDatas: Array<TComments>
  setCommentDatas: Dispatch<SetStateAction<TComments[]>>
}

export type BoardDetailCommentListUIProps = {
  commentDatas: Array<TComments>
  onClickDeleteComment: (commentId: string) => () => void
}

export type DetailCommentItemProps = {
  commentData: TComments
  onClickDeleteComment: (commentId: string) => () => void
}

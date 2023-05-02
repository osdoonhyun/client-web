import { TComments } from '@/src/commons/types/generated/types'

export type BoardDetailCommentListProps = {
  commentDatas: Array<TComments>
}

export type BoardDetailCommentListUIProps = {
  commentDatas: Array<TComments>
  // isCommentLoading: boolean
  // userData: TUser
  // commentsCount: number
  // inputComment: string
  // onChangeInputComment: (event: ChangeEvent<HTMLInputElement>) => void
  // onClickCreateComment: (event: MouseEvent<HTMLButtonElement>) => void
}

export type DetailCommentItemProps = {
  commentData: TComments
}

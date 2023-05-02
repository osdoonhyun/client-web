import { TComments, TReply } from '@/src/commons/types/generated/types'
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'

export type BoardDetailCommentListProps = {
  commentDatas: Array<TComments>
  setCommentDatas: Dispatch<SetStateAction<TComments[]>>
}

export type BoardDetailCommentListUIProps = {
  isReplyLoading: boolean
  commentDatas: Array<TComments>
  onClickCreateReplyComment: (
    commentId: string,
  ) => (event: MouseEvent<HTMLButtonElement>) => void
  onClickDeleteComment: (commentId: string) => () => void
  onClickDeleteReplyComment: (commentId: string, replyid: string) => () => void
}

export type DetailCommentItemProps = {
  isReplyLoading: boolean
  commentData: TComments
  onClickCreateReplyComment: (
    commentId: string,
  ) => (event: MouseEvent<HTMLButtonElement>) => void
  onClickDeleteComment: (commentId: string) => () => void
  onClickDeleteReplyComment: (commentId: string, replyid: string) => () => void
}

export type DetailCommentReplyListProps = {
  isReplyLoading: boolean
  commentId: string
  isOpenReply: boolean
  replyDatas: Array<TReply>
  onClickCreateReplyComment: (
    commentId: string,
  ) => (event: MouseEvent<HTMLButtonElement>) => void
  onClickDeleteReplyComment: (commentId: string, replyid: string) => () => void
}

export type DetailCommentReplyItemProps = {
  commentId: string
  reply: TReply
  onClickDeleteReplyComment: (commentId: string, replyid: string) => () => void
}

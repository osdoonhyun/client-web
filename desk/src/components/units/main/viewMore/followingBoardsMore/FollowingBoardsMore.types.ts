import { TBoard, TUser } from '@/src/commons/types/generated/types'

export type ExtendedBoard = TBoard & {
  user: TUser
}

export type FollowingBoardsMoreUIProps = {
  onLoadMore: () => void
  onClickBoardDetail: (boardId: string) => void
  onClickUserDetail: (userId: string) => void
  boards: ExtendedBoard[]
}

import { TBoard, TUser } from '@/src/commons/types/generated/types'

type ExtendedBoard = Pick<TBoard, Exclude<keyof TBoard, 'writer'>> & {
  user: TUser
}

export type FollowingBoardsMoreUIProps = {
  onLoadMore: () => void
  boards: ExtendedBoard[]
}

import { TBoard } from '@/src/commons/types/generated/types'

export type RecentMoreUIProps = {
  boards: TBoard[]
  onLoadMore: () => void
  onClickBoardDetail: (boardId: string) => void
  onClickUserDetail: (userId: string) => void
}

import { TBoard } from '@/src/commons/types/generated/types'

export type RecentMoreUIProps = {
  onLoadMore: () => void
  boards: TBoard[]
}

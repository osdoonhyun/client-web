import { ReactNode } from 'react'

export type InfiniteScrollerProps = {
  loadMore: () => void
  hasMore: boolean
  children: ReactNode
}

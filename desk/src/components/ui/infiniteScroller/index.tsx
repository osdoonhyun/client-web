import InfiniteScroll from 'react-infinite-scroller'
import { InfiniteScrollerProps } from './types'

export default function InfiniteScroller(props: InfiniteScrollerProps) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.loadMore} hasMore={props.hasMore}>
      {props.children}
    </InfiniteScroll>
  )
}

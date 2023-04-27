import FolloweesBoardsMoreUI from './FolloweesBoardsMore.presenter'

export default function FolloweesBoardsMore() {
  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  return (
    <>
      <FolloweesBoardsMoreUI onLoadMore={handleOnLoadMore} />
    </>
  )
}

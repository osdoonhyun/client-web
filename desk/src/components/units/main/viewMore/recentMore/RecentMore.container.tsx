import RecentMoreUI from './RecentMore.presenter'

export default function RecentMore() {
  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  return (
    <>
      <RecentMoreUI onLoadMore={handleOnLoadMore} />
    </>
  )
}

import AllProductsMoreUI from './AllProductsMore.presenter'

export default function AllProductsMore() {
  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  return (
    <>
      <AllProductsMoreUI onLoadMore={handleOnLoadMore} />
    </>
  )
}

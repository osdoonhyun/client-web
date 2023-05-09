import AllProductsMoreUI from './AllProductsMore.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useQuery } from '@apollo/client'
import { FETCH_ALL_PRODUCTS } from './AllProductsMore.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useRouter } from 'next/router'

export default function AllProductsMore() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchAllProducts'>>(FETCH_ALL_PRODUCTS)

  const router = useRouter()

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const allProducts = data?.fetchAllProducts ?? []

  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  const onClickBoardDetail = (board: { id: string }) => {
    const boardId = board.id
    router.push(`/boards/${boardId}`)
  }

  return (
    <>
      <AllProductsMoreUI
        onLoadMore={handleOnLoadMore}
        allProducts={allProducts}
        onClickBoardDetail={onClickBoardDetail}
      />
    </>
  )
}

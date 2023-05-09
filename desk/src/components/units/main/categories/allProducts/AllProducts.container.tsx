import AllProductsUI from './AllProducts.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useQuery } from '@apollo/client'
import { FETCH_ALL_PRODUCTS } from './AllProducts.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'

export default function AllProducts() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchAllProducts'>>(FETCH_ALL_PRODUCTS)

  const router = useRouter()
  const allProducts = data?.fetchAllProducts ?? []

  const categoryTitle = '💻 전체 장비 모아보기'

  const onClickBoardDetail = (board: { id: string }) => {
    const boardId = board.id
    router.push(`/boards/${boardId}`)
  }

  if (loading) {
    return (
      <>
        <Center h="370px">
          <CustomSpinner />
        </Center>
      </>
    )
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return (
    <>
      <AllProductsUI
        categoryTitle={categoryTitle}
        allProducts={allProducts}
        onClickBoardDetail={onClickBoardDetail}
      />
    </>
  )
}

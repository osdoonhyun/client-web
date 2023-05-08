import { TProduct } from '@/src/commons/types/generated/types'

export type AllProductsUIProps = {
  categoryTitle: string
  allProducts: TProduct[]
  onClickBoardDetail: (board: { id: string }) => void
}

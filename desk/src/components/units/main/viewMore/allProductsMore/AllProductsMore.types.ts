import { TProduct } from '@/src/commons/types/generated/types'

export type AllProductsMoreUIProps = {
  onLoadMore: () => void
  allProducts: TProduct[]
}

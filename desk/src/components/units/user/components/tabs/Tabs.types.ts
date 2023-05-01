import { TBoard, TProduct } from '@/src/commons/types/generated/types'

export type NavigationTabsProps = {
  isMyPage: boolean
  userid: string
  isLiked: boolean
  toggleIsLiked: () => void
}

export type UserData = {
  // data: Array<TBoard | TProduct>
  data: any
}

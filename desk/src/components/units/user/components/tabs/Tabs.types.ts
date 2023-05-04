import { TBoard, TProduct } from '@/src/commons/types/generated/types'

export type NavigationTabsProps = {
  isMyPage: boolean
  userid: string
}

export type UserData = {
  // data: Array<TBoard | TProduct>
  data: any
}

export type Picture = {
  id: number //index
  url: string
  isMain: boolean
}

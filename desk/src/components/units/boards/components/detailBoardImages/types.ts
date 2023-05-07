import { TUser } from '@/src/commons/types/generated/types'

export type DetailBoardImagesProps = {
  boardId: string
  imageURLs: string[]
  likers: TUser[]
}

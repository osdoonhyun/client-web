import { TUser } from '@/src/commons/types/generated/types'

export type CountStateWithLikeProps = {
  boardId: string
  likes: number
  views: number
  comments: number | undefined
  likers: TUser[]
}

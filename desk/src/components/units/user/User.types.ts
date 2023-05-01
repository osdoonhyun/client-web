import { TFetchUser } from '@/src/commons/types/generated/types'

export type UserProps = {
  userData: TFetchUser
}

export type UserUIProps = {
  userData: TFetchUser
  showUserPosts: boolean
  showUserProductPosts: boolean
  showLikedPosts: boolean
  isLoggedIn: boolean
  isMyPage: boolean
  isLiked: boolean
  toggleIsLiked: () => void
  onClickTab: (id: number) => void
  onClickMoveToAccountEdit: () => void
  onClickFollowingButton: () => void
}

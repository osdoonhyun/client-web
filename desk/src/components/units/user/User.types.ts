import { TFetchUser } from '@/src/commons/types/generated/types'

export type UserProps = {
  userData: TFetchUser
}

export type UserUIProps = {
  userData: TFetchUser
  isLoggedIn: boolean
  isMyPage: boolean
  isLiked: boolean
  isFollowing: boolean
  toggleIsLiked: () => void
  onClickMoveToAccountEdit: () => void
  onClickFollowingButton: () => void
}

import { TFetchUser } from '@/src/commons/types/generated/types'

export type UserProps = {
  userData: TFetchUser
}

export type UserUIProps = {
  userData: TFetchUser
  isLoggedIn: boolean
  isMyPage: boolean
  isFollowing: boolean
  onClickMoveToAccountEdit: () => void
  onClickFollowingButton: () => void
}

import { TQuery } from '@/src/commons/types/generated/types'
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
  followingsData: Pick<TQuery, 'fetchFollowings'> | undefined
  followeesData: Pick<TQuery, 'fetchFollowees'> | undefined
}

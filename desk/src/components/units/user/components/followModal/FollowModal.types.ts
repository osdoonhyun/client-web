import { TFetchUser, TQuery } from '@/src/commons/types/generated/types'

export type FollowModalType = 'followee' | 'following'

export type FollowModalProps = {
  userData: TFetchUser
  isLoggedIn: boolean
  type: FollowModalType
  followingsData: Pick<TQuery, 'fetchFollowings'> | undefined
  followeesData: Pick<TQuery, 'fetchFollowees'> | undefined
}

export type FolloweesData = {
  fetchFollowees: {
    id: string
    nickName: string
    picture: string
    followingsCount: number
    followingStatus: boolean
  }
}
export type FollowingsData = {
  fetchFollowings: {
    id: string
    nickName: string
    picture: string
    followingsCount: number
    followingStatus: boolean
  }
}

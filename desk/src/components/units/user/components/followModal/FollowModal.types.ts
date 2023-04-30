export type FollowModalType = 'follower' | 'followee'

export type FollowModalProps = {
  userid: string
  isLoggedIn: boolean
  type: FollowModalType
  followCount: number
}

export type FolloweesData = {
  fetchFollowees: {
    user: {
      id: string
      nickName: string
      picture: string
    }
    followee: string
  }
}
export type FollowingsData = {
  fetchFollowings: {
    user: {
      id: string
      nickName: string
      picture: string
    }
    following: string
  }
}

import { gql } from '@apollo/client'

export const FETCH_FOLLOWEES = gql`
  query fetchFollowees($userid: String!) {
    fetchFollowees(userid: $userid) {
      id
      nickName
      picture
      followeesCount
      followeeStatus
      followingsCount
      followingStatus
    }
  }
`
export const FETCH_FOLLOWINGS = gql`
  query fetchFollowings($userid: String!) {
    fetchFollowings(userid: $userid) {
      id
      nickName
      picture
      followeesCount
      followeeStatus
      followingsCount
      followingStatus
    }
  }
`
// followeesCount : 팔로워 수
// followeeStatus : 이 사람이 나를 팔로잉 하는지
// followingsCount : 팔로우 수
// followingStatus : 내가 이 사람을 팔로잉 하는지

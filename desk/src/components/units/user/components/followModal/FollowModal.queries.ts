import { gql } from '@apollo/client'

export const FETCH_FOLLOWEES = gql`
  query fetchFollowees($userid: String!) {
    fetchFollowees(userid: $userid) {
      id
      nickName
      picture
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
      followingsCount
      followingStatus
    }
  }
`

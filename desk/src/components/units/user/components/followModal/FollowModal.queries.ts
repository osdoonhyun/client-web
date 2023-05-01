import { gql } from '@apollo/client'

export const FETCH_FOLLOWEES = gql`
  query fetchFollowees($userid: String!) {
    fetchFollowees(userid: $userid) {
      user {
        id
        nickName
        picture
      }
      followee
    }
  }
`
export const FETCH_FOLLOWINGS = gql`
  query fetchFollowings($userid: String!) {
    fetchFollowings(userid: $userid) {
      user {
        id
        nickName
        picture
      }
      following
    }
  }
`

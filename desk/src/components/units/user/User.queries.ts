import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  query fetchUser($userid: String!) {
    fetchUser(userid: $userid) {
      user {
        id
        email
        nickName
        intro
        picture
        jobGroup
        provider
        snsAccounts {
          id
          sns
        }
        followings {
          id
          followingid
        }
        followees {
          id
          followeeid
        }
      }
      boardCount
      followingCount
      followeeCount
    }
  }
`

export const UPDATE_FOLLOWING = gql`
  mutation updateFolloiwng($follwoingid: String!) {
    updateFollowing(followingid: $followingid)
  }
`

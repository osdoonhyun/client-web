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
        followingsCount
        followeesCount
        followingStatus
        followeeStatus
      }
      boardCount
    }
  }
`

export const UPDATE_FOLLOWING = gql`
  mutation updateFolloiwng($followingid: String!) {
    updateFollowing(followingid: $followingid)
  }
`

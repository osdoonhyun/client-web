import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($userid: String!) {
    fetchBoards(userid: $userid) {
      id
      title
      pictures {
        url
        isMain
      }
      hashtags {
        id
        hashtag
      }
      writer {
        id
        nickName
        picture
        jobGroup
      }
      views
      like
      likes
      createdAt
    }
  }
`

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      id
      email
      nickName
      picture
      jobGroup
      provider
    }
  }
`

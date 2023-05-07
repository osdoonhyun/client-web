import { gql } from '@apollo/client'

export const FETCH_TOP10 = gql`
  query fetchTop10($userid: String!) {
    fetchTop10(userid: $userid) {
      id
      title
      pictures {
        url
        isMain
      }
      hashtags {
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

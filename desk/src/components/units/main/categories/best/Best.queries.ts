import { gql } from '@apollo/client'

export const FETCH_TOP10 = gql`
  query fetchTop10 {
    fetchTop10 {
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
      likes
      createdAt
    }
  }
`

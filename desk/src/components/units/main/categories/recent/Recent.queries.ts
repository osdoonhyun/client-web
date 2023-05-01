import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
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
        nickName
        picture
        jobGroup
      }
      createdAt
      views
      likes
    }
  }
`

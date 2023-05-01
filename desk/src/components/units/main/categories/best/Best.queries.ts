import { gql } from '@apollo/client'

export const FETCH_BEST_BOARDS = gql`
  query fetchBestBoards {
    fetchBestBoards {
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

import { gql } from '@apollo/client'

export const FETCH_BOARDS_USER_LIKED = gql`
  query FetchBoardsUserLiked {
    fetchBoardsUserLiked {
      id
      title
      writer {
        id
        email
        nickName
        picture
      }
      pictures {
        id
        url
        isMain
      }
      like
      likes
      hashtags {
        hashtag
      }
    }
  }
`

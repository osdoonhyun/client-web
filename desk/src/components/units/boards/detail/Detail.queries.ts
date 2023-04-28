import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
  query fetchBoard($boardid: String!) {
    fetchBoard(boardid: $boardid) {
      id
      title
      description
      recommend
      products {
        id
        name
        url
        picture
      }
      comments {
        id
        content
      }
      hashtags {
        id
        hashtag
      }
      pictures {
        id
        url
        isMain
      }
      likers {
        id
        email
        nickName
      }
      writer {
        id
        email
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

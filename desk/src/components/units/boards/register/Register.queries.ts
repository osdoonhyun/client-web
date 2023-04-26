import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
    }
  }
`

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
      }
      createdAt
      views
      likes
    }
  }
`

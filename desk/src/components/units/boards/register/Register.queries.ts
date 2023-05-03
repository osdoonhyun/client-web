import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
  query fetchBoard($boardid: String!, $userid: String!) {
    fetchBoard(boardid: $boardid, userid: $userid) {
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

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
    }
  }
`

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $boardid: String!) {
    createBoard(updateBoardInput: $updateBoardInput, boardid: $boardid) {
      id
    }
  }
`

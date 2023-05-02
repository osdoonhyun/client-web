import { gql } from '@apollo/client'

export const FETCH_USER_BOARDS = gql`
  query fetchUserBoards($userid: String!) {
    fetchUserBoards(userid: $userid) {
      id
      pictures {
        id
        url
        isMain
      }
      like
    }
  }
`

export const FETCH_BOARDS_USER_LIKED = gql`
  query fetchBoardsUserLiked($userid: String!) {
    fetchBoardsUserLiked(userid: $userid) {
      id
      pictures {
        id
        url
        isMain
      }
      like
    }
  }
`

export const FETCH_PRODUCTS = gql`
  query fetchProducts($userid: String!) {
    fetchProducts(userid: $userid) {
      id
      name
      picture
    }
  }
`

export const UPDATE_BOARD_LIKER = gql`
  mutation updateBoardLiker($boardid: String!) {
    updateBoardLiker(boardid: $boardid)
  }
`

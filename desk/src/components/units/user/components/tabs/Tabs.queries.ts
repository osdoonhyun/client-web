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

export const FETCH_USER_PRODUCTS = gql`
  query fetchUserProducts($userid: String!) {
    fetchUserProducts(userid: $userid) {
      id
      name
      picture
    }
  }
`

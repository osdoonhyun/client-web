import { gql } from '@apollo/client'

export const FETCH_USER_BOARDS = gql`
  query fetchUserBoards($userid: String!, $searchid: String!) {
    fetchUserBoards(userid: $userid, searchid: $searchid) {
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
  query FetchBoardsUserLiked {
    fetchBoardsUserLiked {
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
      board {
        id
      }
    }
  }
`

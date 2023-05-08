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
        description
      }
      comments {
        id
        content
        user {
          id
          nickName
          picture
        }
        replies {
          id
          content
          user {
            id
            nickName
            picture
          }
          createdAt
        }
        createdAt
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

export const UPDATE_BOARD_LIKER = gql`
  mutation updateBoardLiker($boardid: String!) {
    updateBoardLiker(boardid: $boardid)
  }
`

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardid: String!) {
    deleteBoard(boardid: $boardid)
  }
`

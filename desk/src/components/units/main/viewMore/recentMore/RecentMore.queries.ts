import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($userid: String!) {
    fetchBoards(userid: $userid) {
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
        id
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

import { gql } from '@apollo/client'

export const FETCH_FOLLOWING_BOARDS = gql`
  query fetchFollowingBoards {
    fetchFollowingBoards {
      users {
        id
        nickName
        picture
        followeeStatus
        boards {
          id
          title
          pictures {
            id
            url
            isMain
          }
          writer {
            id
          }
          createdAt
          likes
          views
        }
      }
    }
  }
`

import { gql } from '@apollo/client'

export const FETCH_FOLLOWING_BOARDS = gql`
  query {
    fetchFollowingBoards {
      id
      email
      nickName
      picture
      jobGroup
      boards {
        id
        title
        recommend
        description
        pictures {
          id
          url
          isMain
        }
      }
    }
  }
`

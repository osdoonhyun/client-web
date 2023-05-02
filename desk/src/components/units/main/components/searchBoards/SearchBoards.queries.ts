import { gql } from '@apollo/client'

export const SEARCH_BOARDS = gql`
  query ($keyword: String!) {
    searchBoards(keyword: $keyword) {
      id
      title
      recommend
      description
      products {
        id
        name
        url
        description
      }
      comments {
        id
        content
        user {
          email
          nickName
          intro
          jobGroup
        }
      }
      hashtags {
        id
        hashtag
      }
      writer {
        id
        email
        nickName
        intro
        jobGroup
      }
      createdAt
    }
  }
`

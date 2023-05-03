import { gql } from '@apollo/client'

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      content
      user {
        id
        nickName
        picture
      }
      createdAt
    }
  }
`

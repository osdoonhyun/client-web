import { gql } from '@apollo/client'

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentid: String!) {
    deleteComment(commentid: $commentid)
  }
`

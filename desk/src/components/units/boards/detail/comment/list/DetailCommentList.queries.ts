import { gql } from '@apollo/client'

export const CREATE_REPLY_COMMENT = gql`
  mutation createReply($createReplyInput: CreateReplyInput!) {
    createReply(createReplyInput: $createReplyInput) {
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

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentid: String!) {
    deleteComment(commentid: $commentid)
  }
`

export const DELETE_REPLY_COMMENT = gql`
  mutation deleteReply($replyid: String!) {
    deleteReply(replyid: $replyid)
  }
`

import { gql } from '@apollo/client'

export const UPDATE_BOARD_LIKER = gql`
  mutation updateBoardLiker($boardid: String!) {
    updateBoardLiker(boardid: $boardid)
  }
`

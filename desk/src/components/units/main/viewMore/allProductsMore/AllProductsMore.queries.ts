import { gql } from '@apollo/client'

export const FETCH_ALL_PRODUCTS = gql`
  query {
    fetchAllProducts {
      id
      name
      url
      description
      picture
      board {
        id
      }
    }
  }
`

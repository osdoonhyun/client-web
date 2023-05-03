import { gql } from '@apollo/client'

export const FETCH_OPEN_GRAPH = gql`
  query getOpenGraph($url: String!) {
    getOpenGraph(url: $url) {
      name
      url
      imageUrl
      description
    }
  }
`

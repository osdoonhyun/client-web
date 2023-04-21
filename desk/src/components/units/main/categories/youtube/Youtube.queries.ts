import { gql } from '@apollo/client'

export const FETCH_YOUTUBE = gql`
  query fetchYoutube {
    fetchYoutube {
      videoUrl
      thumbnailUrl
      views
    }
  }
`

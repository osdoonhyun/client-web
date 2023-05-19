import { gql } from '@apollo/client'

export const FETCH_USERS = gql`
  query {
    fetchUsers {
      id
      email
      nickName
      picture
      jobGroup
      followingsCount
      followeesCount
    }
  }
`

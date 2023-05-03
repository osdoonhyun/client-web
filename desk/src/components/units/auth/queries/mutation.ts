import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      nickName
      jobGroup
      provider
    }
  }
`

export const AUTH_EMAIL = gql`
  mutation authEmail($authEmailInput: AuthEmailInput!) {
    authEmail(authEmailInput: $authEmailInput)
  }
`

export const MATCH_AUTH_NUMBER = gql`
  mutation matchAuthNumber($matchAuthInput: MatchAuthInput!) {
    matchAuthNumber(matchAuthInput: $matchAuthInput)
  }
`

export const LOGIN = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`

export const LOGOUT = gql`
  mutation {
    logOut
  }
`

export const SIGNOUT = gql`
  mutation {
    deleteUser
  }
`

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($resetPasswordInput: ResetPasswordInput!) {
    resetUserPassword(resetPasswordInput: $resetPasswordInput)
  }
`

export const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      id
      email
      nickName
      picture
      jobGroup
      provider
    }
  }
`

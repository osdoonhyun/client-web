import {
  AuthModalToggle,
  AuthModalType,
  MyToken,
  MyUserInfo,
  isLoggedInState,
} from '@/src/commons/store/atom'
import { TAuthModalType } from '@/src/components/units/auth/Auth.types'
import LoginIsOpen from '@/src/components/units/auth/login/Login.isOpen'
import {
  FETCH_LOGIN_USER,
  LOGIN,
  LOGOUT,
  RESTORE_ACCESS_TOKEN,
  SIGNOUT,
} from '@/src/components/units/auth/queries/mutation'
import SignoutIsOpen from '@/src/components/units/auth/signout/Signout.isOpen'
import SignupIsOpen from '@/src/components/units/auth/signup/Signup.isOpen'
import { useApolloClient, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { TMutation } from '../types/generated/types'
import { useToast } from '@chakra-ui/react'

export function useAuth() {
  const client = useApolloClient()
  const router = useRouter()
  const toast = useToast()

  const [, setAuthModalType] = useRecoilState(AuthModalType)
  const [, setAuthModalToggle] = useRecoilState(AuthModalToggle)

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState)
  const [myToken, setMyToken] = useRecoilState(MyToken)
  const [myUserInfo, setMyUserInfo] = useRecoilState(MyUserInfo)

  const [loginMutation] = useMutation<Pick<TMutation, 'login'>>(LOGIN)
  const [logoutMutation] = useMutation<Pick<TMutation, 'logOut'>>(LOGOUT)
  const [signoutMutation] = useMutation<Pick<TMutation, 'deleteUser'>>(SIGNOUT)

  useEffect(() => {
    fetchUserInfo()
  }, [isLoggedIn])

  const openModal = (type: TAuthModalType) => {
    setAuthModalType(type)
    setAuthModalToggle(prev => !prev)
  }

  async function logout() {
    await logoutMutation().then(() => {
      clear()
      setAuthModalType('AFTER_AUTH')

      router.push('/')
    })
  }

  async function signout() {
    await signoutMutation().then(() => {
      clear()
      setAuthModalType('AFTER_AUTH')

      router.push('/')
    })
  }

  async function login(email: string, password: string) {
    return await loginMutation({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    })
      .then(result => {
        setIsLoggedIn(true)
        setMyToken(result.data?.login ?? '')
        setAuthModalType('AFTER_AUTH')
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({
            title: '에러',
            description: `${error.message}`,
            status: 'error',
            position: 'top',
          })
        }
      })
  }

  async function fetchUserInfo() {
    if (isLoggedIn) {
      const result = await client.query({ query: FETCH_LOGIN_USER })
      const { id, email, nickName, jobGroup, provider } = result.data?.fetchLoginUser

      setMyUserInfo({ id, email, nickName, jobGroup, provider })
    }
  }

  const clear = async () => {
    setMyToken('')
    setIsLoggedIn(false)
    setMyUserInfo(null)
  }

  const loginModalUI = useCallback(() => {
    return <LoginIsOpen />
  }, [])

  const signupModalUI = useCallback(() => {
    return <SignupIsOpen />
  }, [])

  const signoutModalUI = useCallback(() => {
    return <SignoutIsOpen />
  }, [])

  return {
    isLoggedIn,
    login,
    logout,
    signout,
    myUserInfo,
    setMyUserInfo,
    myToken,
    setMyToken,
    fetchUserInfo,
    openModal,
    LoginModalUI: loginModalUI,
    SignupModalUI: signupModalUI,
    SignoutModalUI: signoutModalUI,
  }
}

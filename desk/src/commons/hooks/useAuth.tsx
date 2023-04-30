import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  AuthModalToggle,
  AuthModalType,
  MyToken,
  MyUserInfo,
} from '@/src/commons/store/atom'
import LoginIsOpen from '@/src/components/units/auth/login/Login.isOpen'
import SignupIsOpen from '@/src/components/units/auth/signup/Signup.isOpen'
import SignoutIsOpen from '@/src/components/units/auth/signout/Signout.isOpen'
import { TAuthModalType, TMyUserInfo } from '@/src/components/units/auth/Auth.types'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import {
  FETCH_LOGIN_USER,
  LOGOUT,
  RESTORE_ACCESS_TOKEN,
  SIGNOUT,
} from '@/src/components/units/auth/queries/mutation'

export function useAuth() {
  const [, setAuthModalType] = useRecoilState(AuthModalType)
  const [, setAuthModalToggle] = useRecoilState(AuthModalToggle)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [myToken, setMyToken] = useRecoilState(MyToken)
  const router = useRouter()
  const [logout] = useMutation(LOGOUT)
  const [signout] = useMutation(SIGNOUT)
  const [restoreAccess] = useMutation(RESTORE_ACCESS_TOKEN)
  const [myUserInfo] = useRecoilState<TMyUserInfo>(MyUserInfo)
  const [, setMyUserInfo] = useRecoilState(MyUserInfo)
  const { data } = useQuery(FETCH_LOGIN_USER)

  useEffect(() => {
    async function restoreAccessToken() {
      await restoreAccess()
        .then(async getLoginToken => {
          setMyToken(getLoginToken.data.restoreAccessToken)

          setMyUserInfo({ ...data.fetchLoginUser })
          setIsLoggedIn(true)
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    void restoreAccessToken()
  }, [restoreAccess, data.fetchLoginUser, setMyToken, setMyUserInfo, setIsLoggedIn])

  useEffect(() => {
    if (!myToken) {
      setIsLoggedIn(false)
      return
    }
    setIsLoggedIn(true)
  }, [myToken])

  const openModal = (type: TAuthModalType) => {
    setAuthModalType(type)
    setAuthModalToggle(prev => !prev)
  }

  async function onClickLogout() {
    setMyToken('')
    await logout().then(() => {
      setMyToken('')
      router.push('/')
    })
    setAuthModalType('AFTER_AUTH')
    void router.push('/')
  }

  async function onClickSignout() {
    setMyToken('')
    await signout().then(() => {
      setMyToken('')
      router.push('/')
    })
    setAuthModalType('AFTER_AUTH')
    void router.push('/')
  }

  const loginUI = useCallback(() => {
    return <LoginIsOpen />
  }, [])

  const signupUI = useCallback(() => {
    return <SignupIsOpen />
  }, [])

  const signoutUI = useCallback(() => {
    return <SignoutIsOpen />
  }, [])

  return {
    isLoggedIn,
    LoginUI: loginUI,
    SignupUI: signupUI,
    SignoutUI: signoutUI,
    openModal,
    onClickLogout,
    onClickSignout,
    myUserInfo,
  }
}

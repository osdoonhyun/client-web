import {
  AuthModalToggle,
  AuthModalType,
  isLoggedInState,
  MyToken,
  MyUserInfo,
} from '@/src/commons/store/atom'
import { TAuthModalType } from '@/src/components/units/auth/Auth.types'
import LoginIsOpen from '@/src/components/units/auth/login/Login.isOpen'
import {
  AUTH_EMAIL,
  CREATE_USER,
  FETCH_LOGIN_USER,
  LOGIN,
  LOGOUT,
  MATCH_AUTH_NUMBER,
  RESET_USER_PASSWORD,
  SIGNOUT,
} from '@/src/components/units/auth/queries/mutation'
import SignoutIsOpen from '@/src/components/units/auth/signout/Signout.isOpen'
import SignupIsOpen from '@/src/components/units/auth/signup/Signup.isOpen'
import { useApolloClient, useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { TMutation, TQuery } from '../types/generated/types'

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
  const [authEmailMutation] = useMutation<Pick<TMutation, 'authEmail'>>(AUTH_EMAIL)
  const [matchAuthNumberMutation] =
    useMutation<Pick<TMutation, 'matchAuthNumber'>>(MATCH_AUTH_NUMBER)
  const [createUserMutation] = useMutation<Pick<TMutation, 'createUser'>>(CREATE_USER)
  const [resetUserPasswordMutation] =
    useMutation<Pick<TMutation, 'resetUserPassword'>>(RESET_USER_PASSWORD)

  ////////////////////////////////////////////////////
  // 로그인 관련 APIs

  /** 유저 정보 */
  useEffect(() => {
    void fetchUserInfo()
  }, [myToken])

  /** 로그아웃 */
  const logout = async () => {
    return await logoutMutation()
      .then(() => {
        clear()
        setAuthModalType('AFTER_AUTH')

        router.push('/')
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

  /** 회원탈퇴 */
  const signout = async () => {
    return await signoutMutation()
      .then(() => {
        clear()
        setAuthModalType('AFTER_AUTH')

        router.push('/')
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

  /** 로그인 */
  const login = async (email: string, password: string) => {
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

  /** 유저 정보 */
  const fetchUserInfo = async () => {
    if (myToken) {
      setIsLoggedIn(true)
      const result = await client.query<Pick<TQuery, 'fetchLoginUser'>>({
        query: FETCH_LOGIN_USER,
      })
      const { id, email, nickName, jobGroup, provider } = result.data?.fetchLoginUser

      setMyUserInfo({ id, email, nickName, jobGroup, provider })
    }
  }

  /** 이메일 체크 */
  const authEmail = async (email: string, authCheck: boolean) => {
    return await authEmailMutation({
      variables: {
        authEmailInput: {
          email,
          authCheck,
        },
      },
    })
  }

  /** 이메일 인증번호 체크 */
  const matchAuthNumber = async (email: string, authNumber: string | undefined) => {
    return await matchAuthNumberMutation({
      variables: {
        matchAuthInput: {
          email,
          authNumber,
        },
      },
    })
  }

  /** 회원가입 */
  const signin = async (email: string, password: string, jobGroup: string) => {
    return await createUserMutation({
      variables: {
        createUserInput: {
          email,
          password,
          jobGroup,
        },
      },
    }).catch(error => {
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

  /** 비밀번호 재설정 */
  const resetUserPassword = async (email: string, password: string) => {
    return await resetUserPasswordMutation({
      variables: {
        resetPasswordInput: {
          email,
          password,
        },
      },
    })
  }

  ////////////////////////////////////////////////////
  // Modal UI

  const loginModalUI = useCallback(() => {
    return <LoginIsOpen />
  }, [])

  const signupModalUI = useCallback(() => {
    return <SignupIsOpen />
  }, [])

  const signoutModalUI = useCallback(() => {
    return <SignoutIsOpen />
  }, [])

  ////////////////////////////////////////////////////
  // Helper methods

  const clear = async () => {
    setMyToken('')
    setIsLoggedIn(false)
    setMyUserInfo(null)
  }

  const openModal = (type: TAuthModalType) => {
    setAuthModalType(type)
    setAuthModalToggle(prev => !prev)
  }

  const isWrittenBy = (id: string) => {
    return myUserInfo?.id === id
  }

  return {
    isLoggedIn,
    isWrittenBy,
    login,
    logout,
    signout,
    signin,
    myUserInfo,
    myToken,
    fetchUserInfo,
    authEmail,
    matchAuthNumber,
    resetUserPassword,
    openModal,
    LoginModalUI: loginModalUI,
    SignupModalUI: signupModalUI,
    SignoutModalUI: signoutModalUI,
  }
}

import { atom } from 'recoil'
import { TAuthModalType, TMyUserInfo } from '@/src/components/units/auth/Auth.types'

export const MyEmailSave = atom({
  key: `myEmailSave`,
  default: '',
})

export const MyToken = atom<string>({
  key: `myToken`,
  default: '',
})

export const AuthModalType = atom<TAuthModalType>({
  key: `authModalType`,
  default: '',
})

export const AuthModalToggle = atom({
  key: `authModalToggle`,
  default: false,
})

export const MyUserInfo = atom<TMyUserInfo | null>({
  key: 'myUserInfo',
  default: null,
})

export const isLoggedInState = atom<boolean>({
  key: `isLoggedInState`,
  default: false,
})

export const replyCommentState = atom<string>({
  key: 'replyCommentState',
  default: '',
})

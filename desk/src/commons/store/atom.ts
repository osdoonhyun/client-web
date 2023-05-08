import { TAuthModalType } from '@/src/components/units/auth/Auth.types'
import { atom } from 'recoil'
import { TUser } from '../types/generated/types'
import { recoilPersist } from 'recoil-persist'

const { persistAtom: local } = recoilPersist({
  key: `atomLocal`,
})

export const MyEmailSave = atom({
  key: `myEmailSave`,
  default: '',
  effects_UNSTABLE: [local],
})

export const MyLastLogined = atom({
  key: `myLastLogined`,
  default: '',
  effects_UNSTABLE: [local],
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

export const MyUserInfo = atom<TUser | null>({
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

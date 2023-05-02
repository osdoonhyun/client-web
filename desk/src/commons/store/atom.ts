import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { TAuthModalType, TMyUserInfo } from '@/src/components/units/auth/Auth.types'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom: session } = recoilPersist({
  key: `atomSession`,
  storage: sessionStorage,
})
const { persistAtom: local } = recoilPersist({
  key: `atomLocal`,
})

export const MyEmailSave = atom({
  key: `myEmailSave`,
  default: '',
  effects_UNSTABLE: [local],
})

export const MyToken = atom<string>({
  key: `myToken`,
  default: '',
  effects_UNSTABLE: [session],
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
  effects_UNSTABLE: [session],
})

export const isLoggedInState = atom<boolean>({
  key: `isLoggedInState`,
  default: false,
  effects_UNSTABLE: [session],
})

export const replyCommentState = atom<string>({
  key: 'replyCommentState',
  default: '',
})

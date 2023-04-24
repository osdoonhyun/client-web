import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage:undefined

const {persistAtom: session} = recoilPersist({
	key: `atomSession`,
	storage: sessionStorage,
})

export const MyToken = atom({
	key: `myToken`,
	default: '',
	effects_UNSTABLE: [session],
})

export const AuthModalType = atom({
	key: `authModalType`,
	default: "",
})

export const AuthModalToggle = atom({
	key: `authModalToggle`,
	default: 0,
})

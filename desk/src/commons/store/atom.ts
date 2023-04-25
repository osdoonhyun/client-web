import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage:undefined

const {persistAtom: session} = recoilPersist({
	key: `atomSession`,
	storage: sessionStorage,
})
const {persistAtom: local} = recoilPersist({
	key: `atomLocal`
})

export const MyEmailSave = atom({
	key: `myEmailSave`,
	default: '',
	effects_UNSTABLE: [local],
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
	default: false,
})

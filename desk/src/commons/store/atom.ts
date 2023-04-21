import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist'
import uuid from 'react-uuid'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage:undefined

const {persistAtom: session} = recoilPersist({
	key: `atomSession/${uuid()}`,
	storage: sessionStorage,
})

export const MyToken = atom({
	key: `myToken/${uuid()}`,
	default: '',
	effects_UNSTABLE: [session],
})

export const MyNickName = atom({
	key: `myNickName/${uuid()}`,
	default: '',
})

export const IsOn = atom({
	key: `isOn/${uuid()}`,
	default: 0,
})

export const IsOn2 = atom({
	key: `isOn2/${uuid()}`,
	default: 0,
})

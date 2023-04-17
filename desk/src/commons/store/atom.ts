import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage:undefined

const {persistAtom} = recoilPersist({
	key: 'atomSession',
	storage: sessionStorage,
})

export const MyToken = atom({
	key: 'myToken',
	default: '',
	effects_UNSTABLE: [persistAtom],
})

export const MyNickName = atom({
	key: 'myNickName',
	default: '',
})

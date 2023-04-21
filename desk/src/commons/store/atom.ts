import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage:undefined

const {persistAtom: session} = recoilPersist({
	key: 'atomSession',
	storage: sessionStorage,
})

export const MyToken = atom({
	key: 'myToken',
	default: '',
	effects_UNSTABLE: [session],
})

export const MyNickName = atom({
	key: 'myNickName',
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

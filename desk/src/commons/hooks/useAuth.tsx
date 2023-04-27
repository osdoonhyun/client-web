import {useCallback, useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {AuthModalType, AuthModalToggle, MyToken} from "@/src/commons/store/atom";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";
import {TAuthModalType} from "@/src/components/units/auth/Auth.types";
import {useRouter} from "next/router";
import {useMutation} from "@apollo/client";
import {LOGOUT} from "@/src/components/units/auth/queries/mutation";
import {SIGNOUT} from "@/src/components/units/auth/queries/mutation";

export function useAuth() {
	const [myToken] = useRecoilState(MyToken)
	const [_, setAuthModalType] = useRecoilState(AuthModalType)
	const [__, setAuthModalToggle] = useRecoilState(AuthModalToggle)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [___, setMyToken] = useRecoilState(MyToken)
	const router = useRouter()
	// 기능구현중
	const [logout] = useMutation(LOGOUT)
	const [signout] = useMutation(SIGNOUT)
	
	useEffect(() => {
		if (!myToken) {
			setIsLoggedIn(false)
			return
		}
		setIsLoggedIn(true)
	}, [myToken])
	
	const openModal = (type: TAuthModalType) => {
		setAuthModalType(type)
		setAuthModalToggle((prev) => !prev)
	}
	
	async function onClickLogout() {
		setMyToken('')
		await logout()
			.then(() => {
				setMyToken('')
				router.push('/')
			})
		setAuthModalType('AFTER_AUTH')
		void router.push('/')
	}
	
	async function onClickSignout() {
		setMyToken('')
		await signout()
			.then(() => {
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
	}
}
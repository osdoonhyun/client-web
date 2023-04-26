import {useCallback, useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {AuthModalType, AuthModalToggle, MyToken} from "@/src/commons/store/atom";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";
import {TAuthModalType} from "@/src/components/units/auth/Auth.types";

export function useAuth() {
	const [myToken] = useRecoilState(MyToken)
	const [_, setAuthModalType] = useRecoilState(AuthModalType)
	const [__, setAuthModalToggle] = useRecoilState(AuthModalToggle)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	
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
	
	const loginUi = useCallback(() => {
		return <LoginIsOpen />
	}, [])
	
	const signupUi = useCallback(() => {
		return <SignupIsOpen />
	}, [])
	
	const logoutUi = useCallback(() => {
		return <LogoutIsOpen />
	}, [])
	
	const signoutUi = useCallback(() => {
		return <SignoutIsOpen />
	}, [])
	
	return {
		isLoggedIn,
		LoginUi: loginUi,
		SignupUi: signupUi,
		LogoutUi: logoutUi,
		SignoutUi: signoutUi,
		openModal,
	}
}
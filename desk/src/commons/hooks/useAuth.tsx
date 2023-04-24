import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {AuthModalType, AuthModalToggle, MyToken} from "@/src/commons/store/atom";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";

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
	
	function loginModalOpen() {
		setAuthModalType("LOGIN")
		setAuthModalToggle((prev) => prev + 1)
	}
	function signupModalOpen() {
		setAuthModalType("SIGNUP")
		setAuthModalToggle((prev) => prev + 1)
	}
	
	function logoutModalOpen() {
		setAuthModalType("LOGOUT")
		setAuthModalToggle((prev) => prev + 1)
	}
	
	function signoutModalOpen() {
		setAuthModalType("SIGNOUT")
		setAuthModalToggle((prev) => prev + 1)
	}
	
	return {
		isLoggedIn,
		Login: () => <LoginIsOpen />,
		Signup: () => <SignupIsOpen />,
		Logout: () => <LogoutIsOpen />,
		Signout: () => <SignoutIsOpen />,
		loginModalOpen,
		signupModalOpen,
		logoutModalOpen,
		signoutModalOpen,
	}
}
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {IsOn, IsOn2, MyToken} from "@/src/commons/store/atom";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";

export function useAuth() {
	const [myToken] = useRecoilState(MyToken)
	const [_, setOn] = useRecoilState(IsOn)
	const [__, setOn2] = useRecoilState(IsOn2)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	
	useEffect(() => {
		if (!myToken) {
			setIsLoggedIn(false)
			return
		}
		setIsLoggedIn(true)
	}, [myToken])
	
	function loginModalOpen() {
		setOn("LOGIN")
		setOn2((prev) => prev + 1)
	}
	function signupModalOpen() {
		setOn("SIGNUP")
		setOn2((prev) => prev + 1)
	}
	
	function logoutModalOpen() {
		setOn("LOGOUT")
		setOn2((prev) => prev + 1)
	}
	
	function signoutModalOpen() {
		setOn("SIGNOUT")
		setOn2((prev) => prev + 1)
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
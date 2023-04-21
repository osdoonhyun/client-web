import {NextRouter, useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {MyToken} from "@/src/commons/store/atom";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";

export function useAuth() {
	const [myToken, setMyToken] = useRecoilState(MyToken)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	
	useEffect(() => {
		if (!myToken) {
			setIsLoggedIn(false)
			return
		}
		setIsLoggedIn(true)
	}, [myToken])
	
	return {
		isLoggedIn,
		Login: () => <LoginIsOpen />,
		Logout: () => <LogoutIsOpen />,
		Signup: () => <SignupIsOpen />,
		Signout: () => <SignoutIsOpen />,
	}
}
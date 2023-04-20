import {NextRouter, useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {MyToken} from "@/src/commons/store/atom";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";

export function useAuth() {
	const router: NextRouter = useRouter()
	const [myToken, setMyToken] = useRecoilState(MyToken)
	const [isLogged, setIsLogged] = useState(false)
	
	useEffect(() => {
		if (!myToken) {
			setIsLogged(false)
			return
		}
		setIsLogged(true)
	}, [myToken])
	
	return {
		isLogged,
		login: () => <LoginIsOpen />,
		logout: () => <LogoutIsOpen />,
		signup: () => <SignupIsOpen />,
		signout: () => <SignoutIsOpen />,
	}
}
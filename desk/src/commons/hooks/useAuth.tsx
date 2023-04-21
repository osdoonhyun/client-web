import {NextRouter, useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {IsOn, IsOn2, MyToken} from "@/src/commons/store/atom";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";
import {useDisclosure} from "@chakra-ui/react";
import {onOpen} from "@/src/components/units/auth/login/Login.isOpen";

export function useAuth() {
	const [myToken, setMyToken] = useRecoilState(MyToken)
	const [on, setOn] = useRecoilState(IsOn)
	const [on2, setOn2] = useRecoilState(IsOn2)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	// const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	
	useEffect(() => {
		if (!myToken) {
			setIsLoggedIn(false)
			return
		}
		setIsLoggedIn(true)
	}, [myToken])
	
	function loginModalOpen() {
		setOn(1)
		setOn2((prev) => prev + 1)
	}
	function signUpModalOpen() {
		setOn(2)
		setOn2((prev) => prev + 1)
	}
	
	return {
		isLoggedIn,
		Login: () => <LoginIsOpen />,
		Logout: () => <LogoutIsOpen />,
		Signup: () => <SignupIsOpen />,
		Signout: () => <SignoutIsOpen />,
		loginModalOpen,
		signUpModalOpen
	}
}
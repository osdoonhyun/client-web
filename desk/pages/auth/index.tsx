import {
	Button,
	Flex,
	VStack,
} from "@chakra-ui/react";
import {useAuth} from "@/src/commons/hooks/useAuth";

export default function LoginPage() {
	const {
		isLoggedIn,
		Login, Logout, Signup, Signout,
		loginModalOpen, signupModalOpen, logoutModalOpen, signoutModalOpen
	} = useAuth()
	return (
		<Flex justify={"center"} minH={'100vh'} align={'center'}>
			<VStack>
				{!isLoggedIn ?
				<>
					<Login />
					<Signup />
					<Button onClick={loginModalOpen}>로그인</Button>
					<Button onClick={signupModalOpen}>회원가입</Button>
				</>
				:
				<>
					<Logout />
					<Signout />
					<Button onClick={logoutModalOpen}>로그아웃</Button>
					<Button onClick={signoutModalOpen}>회원탈퇴</Button>
				</>
				}
			</VStack>
		</Flex>
	)
}
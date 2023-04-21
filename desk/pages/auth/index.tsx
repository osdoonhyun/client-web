import {
	Button,
	Flex, useDisclosure,
	VStack,
} from "@chakra-ui/react";
import {useAuth} from "@/src/commons/hooks/useAuth";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";

export default function LoginPage() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	const {isLoggedIn, Login, Logout, Signup, Signout, loginModalOpen, signUpModalOpen} = useAuth()
	return (
		<Flex justify={"center"} minH={'100vh'} align={'center'}>
			<VStack>
				{!isLoggedIn ?
				<>
					<Login />
					<Signup />
					<Button onClick={loginModalOpen}>로그인</Button>
					<Button onClick={signUpModalOpen}>회원가입</Button>
				</>
				:
				<>
					<Logout />
					<Signout />
				</>
				}
			</VStack>
		</Flex>
	)
}
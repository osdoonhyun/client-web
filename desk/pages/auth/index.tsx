import {
	Flex,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";
import {useAuth} from "@/src/commons/hooks/useAuth";

export default function LoginPage() {
	const {isLoggedIn, login, logout, signup, signout} = useAuth()
	return (
		<Flex justify={"center"} minH={'100vh'} align={'center'}>
			<VStack>
				{!isLoggedIn ?
				<>
					<SignupIsOpen />
					<LoginIsOpen />
				</>
				:
				<>
					<LogoutIsOpen />
					<SignoutIsOpen />
				</>
				}
			</VStack>
		</Flex>
	)
}
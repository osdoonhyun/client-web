import {
	Flex,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import SignupIsOpen from "@/src/components/units/auth/signup/Signup.isOpen";
import LoginIsOpen from "@/src/components/units/auth/login/Login.isOpen";
import LogoutIsOpen from "@/src/components/units/auth/logout/Logout.isOpen";
import SignoutIsOpen from "@/src/components/units/auth/signout/Signout.isOpen";

export default function LoginPage() {
	return (
		<Flex justify={"center"} minH={'100vh'} align={'center'}>
			<VStack>
				<SignupIsOpen />
				<LoginIsOpen />
				<LogoutIsOpen />
				<SignoutIsOpen />
			</VStack>
			
		</Flex>
	)
}
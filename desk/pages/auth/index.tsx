import {
	Flex,
	VStack,
} from "@chakra-ui/react";
import {useAuth} from "@/src/commons/hooks/useAuth";

export default function LoginPage() {
	const {isLoggedIn, Login, Logout, Signup, Signout} = useAuth()
	return (
		<Flex justify={"center"} minH={'100vh'} align={'center'}>
			<VStack>
				{!isLoggedIn ?
				<>
					<Login />
					<Signup />
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
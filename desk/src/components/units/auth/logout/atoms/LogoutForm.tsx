import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	useColorModeValue,
	Avatar,
	Center,
} from '@chakra-ui/react';
import {useMutation} from "@apollo/client";
import {LOGOUT} from "@/src/components/units/auth/queries/mutation";
import {useRecoilState} from "recoil";
import {MyToken} from "@/src/commons/store/atom";
import {useRouter} from "next/router";

export default function LogoutForm() {
	const router = useRouter()
	const [myToken, setMyToken] = useRecoilState(MyToken)
	const [logout] = useMutation(LOGOUT)
	
	async function onClickLogOut() {
		// await logout()
		// 	.then(() => {
		// 		setMyToken('')
		// 		router.push('/')
		// 	})
	}
	
	return (
		<Flex
			align={'center'}
			justify={'center'}
		>
			<Stack
				spacing={4}
				w={'full'}
				maxW={'md'}
				bg={useColorModeValue('white', 'gray.700')}
				rounded={'xl'}
				boxShadow={'lg'}
				p={6}
				my={12}>
				<Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
					로그아웃
				</Heading>
				<FormControl id="userName">
					<Stack direction={['column', 'row']} spacing={6}>
						<Center>
							<Avatar size="xl" src="https://bit.ly/sage-adebayo">
							</Avatar>
						</Center>
						<Center w="full">
							<Button w="full" onClick={onClickLogOut}>로그아웃</Button>
						</Center>
					</Stack>
				</FormControl>
				<FormControl id="userName">
					<FormLabel>닉네임</FormLabel>
					<Input
						placeholder="홍길동"
						readOnly
						_placeholder={{ color: 'gray.500' }}
						type="text"
					/>
				</FormControl>
				<FormControl id="email">
					<FormLabel>이메일</FormLabel>
					<Input
						placeholder="hongildong@naver.com"
						readOnly
						_placeholder={{ color: 'gray.500' }}
						type="email"
					/>
				</FormControl>
			</Stack>
		</Flex>
	);
}
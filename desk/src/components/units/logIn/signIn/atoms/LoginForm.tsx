import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Button,
	Heading,
	Text,
	Link,
	useColorModeValue
} from '@chakra-ui/react';
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import OnClickBtLink from "@/src/components/units/logIn/signIn/atoms/OnClickBtLink";
import {useMutation} from "@apollo/client";
import {LOGIN} from "@/src/components/units/logIn/queries/mutation";
import {MyToken} from "@/src/commons/store/atom";
import {useRecoilState} from "recoil";

export default function LoginForm() {
	const router = useRouter()
	const [myToken, setMyToken] = useRecoilState(MyToken)
	const [login] = useMutation(LOGIN)
	const myEmail = useRef(null)
	const myPass = useRef(null)
	const [err, setErr] = useState({
		errEmail: '',
		errPass: ''
	})
	
	async function onClickLoginSubmit() {
		await login({
			variables: {
				loginInput: {
					email: myEmail.current?.value,
					password: myPass.current?.value,
				}
			}
		}).then((result) => {
			setMyToken(result.data.login)
			router.push('/')
		}).catch((err) => {
			let errMail = ''
			let errPass = ''
			if (err.message?.includes('없는 회원')) {
				errMail = '없는 회원 입니다.'
			}
			if (err.message?.includes('비밀번호')) {
				errPass = '비밀번호가 일치하지 않습니다.'
			}
			setErr({...err, errEmail: errMail, errPass: errPass})
		})
	}
	
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('white', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>로그인</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						당신의 책상을 자랑하라! <Link color={'blue.400'} id={'deca'} onClick={(e) => {OnClickBtLink(e,  router)}}>데카이브</Link> ✌️
					</Text>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>
					<Stack spacing={4}>
						<FormControl id="email">
							<FormLabel>이메일</FormLabel>
							<Input type="email"
							       ref={myEmail}
								placeholder={'이메일 주소를 입력 해 주세요'}/>
							<Text p={4} color={'red'}>{err.errEmail}</Text>
						</FormControl>
						<FormControl id="password">
							<FormLabel>비밀번호</FormLabel>
							<Input type="password"
							       ref={myPass}
								placeholder={'비밀번호를 입력 해 주세요'}/>
							<Text p={4} color={'red'}>{err.errPass}</Text>
						</FormControl>
						<Stack spacing={5}>
							<Stack
								direction={{ base: 'column', sm: 'row' }}
								align={'start'}
								justify={'space-between'}>
								<Checkbox>저장하기</Checkbox>
								<Link color={'blue.400'}>비번찾기</Link>
							</Stack>
							<Button
								onClick={onClickLoginSubmit}
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}>
								로그인
							</Button>
								<Button
									name='btMemberInvite'
									onClick={(e) => {OnClickBtLink(e,  router)}}
									bg={'white'}
									border={'1px'}
									borderColor={'blue.500'}
									// color={'white'}
									_hover={{
										bg: 'blue.100',
									}}>
										회원가입
								</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
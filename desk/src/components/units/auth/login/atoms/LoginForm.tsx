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
import OnClickBtLink from "@/src/components/units/auth/login/atoms/OnClickBtLink";
import {useMutation} from "@apollo/client";
import {LOGIN} from "@/src/components/units/auth/queries/mutation";
import {MyToken} from "@/src/commons/store/atom";
import {useRecoilState} from "recoil";

export default function LoginForm() {
	const router = useRouter()
	const [myToken, setMyToken] = useRecoilState(MyToken)
	const [login] = useMutation(LOGIN)
	const myEmail = useRef<HTMLInputElement | null>(null)
	const myPassword = useRef<HTMLInputElement | null>(null)
	const [err, setErr] = useState({
		errEmail: '',
		errPass: ''
	})
	
	async function onClickLoginSubmit() {
		if (!myEmail.current || !myPassword.current) {
			return
		}
		
		await login({
			variables: {
				loginInput: {
					email: myEmail.current.value,
					password: myPassword.current.value,
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
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('white', 'gray.700')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>로그인</Heading>
					<Text fontSize={'lg'} color={useColorModeValue('gray.800', 'gray.300')}>
						당신의 책상을 자랑하라! <Link color={'dPrimary'} id={'deca'} onClick={(e) => {OnClickBtLink(e,  router)}}>데카이브</Link> ✌️
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
								placeholder={'이메일 주소를 입력해 주세요'}/>
							<Text p={4} color={'red'}>{err.errEmail}</Text>
						</FormControl>
						<FormControl id="password">
							<FormLabel>비밀번호</FormLabel>
							<Input type="password"
							       ref={myPassword}
								placeholder={'비밀번호를 입력해 주세요'}/>
							<Text p={4} color={'red'}>{err.errPass}</Text>
						</FormControl>
						<Stack spacing={5}>
							<Stack
								direction={{ base: 'column', sm: 'row' }}
								align={'start'}
								justify={'space-between'}>
								<Checkbox>저장하기</Checkbox>
								<Link color={useColorModeValue('blue.400', 'dPrimaryHover.transparency')}>비밀번호를 잊어버리셨나요?</Link>
							</Stack>
							<Button
								onClick={onClickLoginSubmit}
								bg={useColorModeValue('blue.400', 'dPrimary')}
								color={'white'}
								_hover={
									useColorModeValue(
										{bg: 'blue.500'},
										{bg: 'dPrimaryHover.dark'}
									)}
							>
								로그인
							</Button>
								<Button
									name='buttonJoinMember'
									onClick={(e) => {OnClickBtLink(e, router)}}
									bg={useColorModeValue('white', 'gray.600')}
									border={'1px'}
									borderColor={'dPrimary'}
									// color={'white'}
									_hover={
										useColorModeValue(
											{bg: 'gray.100'},
											{bg: 'gray.700'}
										)}
								>
										회원가입
								</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
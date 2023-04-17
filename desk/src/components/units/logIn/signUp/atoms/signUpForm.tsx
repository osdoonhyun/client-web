import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from '@chakra-ui/react';
import {useRef, useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {NextRouter, useRouter} from "next/router";
import OnClickBtLink from "@/src/components/units/logIn/signIn/atoms/OnClickBtLink";
import {useMutation} from "@apollo/client";
import {AUTH_EMAIL, CREATE_USER, MATCH_AUTH_NUMBER} from "@/src/components/units/logIn/queries/mutation";

type Props = {

}

export default function SignUpForm() {
	const [errMsg, setErrMsg] = useState({
		errText: '',
		errColor: '',
		isEmail: false,
		verificationText: '',
		verificationColor: '',
		isVerify: false,
		isSubmitBt: false,
		myPass: ''
	})
	const [showPassword, setShowPassword] = useState(false);
	
	const [createUser] = useMutation(CREATE_USER)
	const [authEmail] = useMutation(AUTH_EMAIL)
	const [matchAuthNumber] = useMutation(MATCH_AUTH_NUMBER)
	const router: NextRouter = useRouter()
	const myEmail = useRef(null)
	const myPass = useRef(null)
	const myAuthNumber = useRef(null)
	
	const onClickCertification = async () => {
		await authEmail({
			variables: {
				email: myEmail.current.value
			}
		}).then(() => {
			const msg = '인증할 이메일 확인 후 인증번호 6자리를 입력 해 주세요'
			setErrMsg({...errMsg, errText: msg, errColor: 'green', isEmail: true})
		}).catch(() => {
			const msg = '이미 사용중인 이메일 입니다.'
			setErrMsg({...errMsg, errText: msg, errColor: 'red'})
			return
		})
	}
	
	const onClickMatchAuthNumber = async () => {
		await matchAuthNumber({
			variables: {
				matchAuthInput: {
					email: myEmail.current.value,
					authNumber: myAuthNumber.current.value
				}
			}
		})
			.then(() => {
				const msg = '인증번호가 일치 합니다.'
				setErrMsg({...errMsg, verificationText: msg, verificationColor: 'green', isVerify: true})
			})
			.catch(() => {
				const msg = '인증번호가 일치 하지 않습니다.'
				setErrMsg({...errMsg, verificationText: msg, verificationColor: 'red'})
			})
	}
	
	const onClickSubmit = async () => {
		const result = await createUser({
			variables: {
				createUserInput: {
					email: myEmail.current.value,
					password: myPass.current.value,
				}
			}
		}).then(() => {
			router.push('/')
		}).catch(() => {
			const errMsg = '이미 사용중인 이메일 입니다.'
			setErrMsg({...errMsg, errText: errMsg, errColor: 'red'})
			return
		})
		
		console.log(result)
		// void router.push('/')
	}
	
	const onChangeMyPass = async (e) => {
		console.log(e.currentTarget.value)
		if (e.currentTarget.value.length > 7) {
			setErrMsg({...errMsg, isSubmitBt: true})
		} else {
			setErrMsg({...errMsg, isSubmitBt: false})
		}
	}
	
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			// bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'} textAlign={'center'}>
						회원가입
					</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						당신의 책상을 자랑하십시요 <Link color={'blue.400'} id={'deca'} onClick={(e) => {OnClickBtLink(e,  router)}}>데카이브</Link> ✌️
					</Text>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>
						<Stack spacing={4}>
							<FormControl id="email" isRequired>
								<FormLabel>이메일</FormLabel>
								<Flex gap={4}>
									<Input ref={myEmail} type="email" placeholder={'이메일을 입력 해 주세요'}/>
									<Button
										onClick={onClickCertification}
										loadingText="Submitting"
										size="lg"
										disabled
										bg={'blue.400'}
										color={'white'}
										_hover={{
											bg: 'blue.500',
										}}>
										인증번호 받기
									</Button>
								</Flex>
								<Text color={errMsg.errColor} p={4}>{errMsg.errText}</Text>
							</FormControl>
							<FormControl id="email" isRequired>
								<FormLabel>인증번호</FormLabel>
								<Flex gap={4}>
									<Input ref={myAuthNumber} type="text" isReadOnly={!errMsg.isEmail} placeholder={'인증번호 받기 클릭 후 인증 가능'} />
									<Button
										onClick={onClickMatchAuthNumber}
										loadingText="Submitting"
										size="lg"
										bg={'blue.400'}
										isDisabled={!errMsg.isEmail}
										color={'white'}
										_hover={{
											bg: 'blue.500',
										}}>
										인증하기
									</Button>
								</Flex>
								<Text color={errMsg.verificationColor} p={4}>{errMsg.verificationText}</Text>
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>비밀번호</FormLabel>
								<InputGroup>
									<Input ref={myPass} onChange={onChangeMyPass} type={showPassword ? 'text' : 'password'} isReadOnly={!errMsg.isVerify} placeholder={'숫자인증 후 비밀번호 입력 가능'}/>
									<InputRightElement h={'full'}>
										<Button
											variant={'ghost'}
											onClick={() =>
												setShowPassword((showPassword) => !showPassword)
											}>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Stack spacing={10} pt={2}>
								<Button
									onClick={onClickSubmit}
									loadingText="Submitting"
									size="lg"
									bg={'blue.400'}
									isDisabled={!errMsg.isSubmitBt}
									color={'white'}
									_hover={{
										bg: 'blue.500',
									}}>
									회원가입
								</Button>
							</Stack>
							<Stack pt={6}>
								<Text align={'center'}>
									이미 회원이신가요? <Link color={'blue.400'} id={'linkLogIn'} onClick={(e) => {OnClickBtLink(e,  router)}}>로그인</Link>
								</Text>
							</Stack>
						</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
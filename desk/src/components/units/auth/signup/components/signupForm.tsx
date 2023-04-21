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
import {ChangeEvent, SetStateAction, useRef, useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {NextRouter, useRouter} from "next/router";
import OnClickBtLink from "@/src/components/units/auth/login/components/OnClickBtLink";
import {useMutation} from "@apollo/client";
import {AUTH_EMAIL, CREATE_USER, MATCH_AUTH_NUMBER} from "@/src/components/units/auth/queries/mutation";
import { PinInput, PinInputField } from '@chakra-ui/react'
import {
	errMsg,
} from "@/src/components/units/auth/Auth.types";
import Login from "@/src/components/units/auth/login/Login.container";

export default function SignupForm() {
	const [errMsg, setErrMsg] = useState<errMsg>({
		errText: '',
		errColor: '',
		isEmail: false,
		verificationText: '',
		verificationColor: '',
		isVerified: false,
		isSubmitButton: false,
		myPassword: ''
	})
	const [showPassword, setShowPassword] = useState(false);
	
	const [createUser] = useMutation(CREATE_USER)
	const [authEmail] = useMutation(AUTH_EMAIL)
	const [matchAuthNumber] = useMutation(MATCH_AUTH_NUMBER)
	const router: NextRouter = useRouter()
	const myEmail = useRef<HTMLInputElement>(null)
	const myPassword = useRef<HTMLInputElement>(null)
	const [pinNumber, setPinNumber] = useState<string | undefined>(undefined)
	const [authType, setAuthType] = useState('authSignup')
	
	const onChangePinNumber = (props: SetStateAction<string | undefined>): void => {
		setPinNumber(props)
	}
	
	const onClickCertification = async () => {
		console.log(myEmail.current?.value)
		await authEmail({
			variables: {
				email: myEmail.current?.value
			}
		}).then(() => {
			const msg = '인증할 이메일 확인 후 인증번호 6자리를 입력해 주세요'
			setErrMsg({...errMsg, errText: msg, errColor: 'green', isEmail: true})
		}).catch(() => {
			const msg = '이미 사용중인 이메일입니다.'
			setErrMsg({...errMsg, errText: msg, errColor: 'red'})
			return
		})
	}
	
	const onClickMatchAuthNumber = async () => {
		await matchAuthNumber({
			variables: {
				matchAuthInput: {
					email: myEmail.current?.value,
					authNumber: pinNumber
				}
			}
		})
			.then(() => {
				const msg = '인증번호가 일치합니다.'
				setErrMsg({...errMsg, verificationText: msg, verificationColor: 'green', isVerified: true})
			})
			.catch(() => {
				const msg = '인증번호가 일치하지 않습니다.'
				setErrMsg({...errMsg, verificationText: msg, verificationColor: 'red'})
			})
	}
	
	const onClickSubmit = async () => {
		await createUser({
			variables: {
				createUserInput: {
					email: myEmail.current?.value,
					password: pinNumber,
				}
			}
		}).then(() => {
			router.push('/')
		}).catch(() => {
			const errorMsg: string = '이미 사용중인 이메일입니다.'
			setErrMsg({...errMsg, errText: errorMsg, errColor: 'red'})
			return
		})
	}
	
	const onChangeMyPassword = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.value.length > 7) {
			setErrMsg({...errMsg, isSubmitButton: true})
		} else {
			setErrMsg({...errMsg, isSubmitButton: false})
		}
	}
	
	return (
		<>
			{authType === 'authSignup' &&
			<Flex
				align={'center'}
				justify={'center'}
			>
				<Stack spacing={8} mx={'auto'} maxW={'lg'} bg={useColorModeValue('white', 'gray.700')}>
					<Stack align={'center'}>
						<Heading fontSize={'4xl'} textAlign={'center'} pt={6}>
							회원가입
						</Heading>
						<Text fontSize={'lg'} color={'gray.600'}>
							당신의 책상을 자랑하십시오 <Link color={'dPrimary'} id={'deca'} onClick={(e) => {OnClickBtLink(e,  router)}}>데카이브</Link> ✌️
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
										<Input ref={myEmail} focusBorderColor={'dPrimary'} type="email" autoFocus={true} placeholder={'이메일을 입력해 주세요'}/>
										<Button
											onClick={onClickCertification}
											loadingText="Submitting"
											size="md"
											px={6}
											disabled
											bg={'dPrimary'}
											color={'white'}
											_hover={
												useColorModeValue(
													{bg: 'dPrimaryHover.dark'},
													{bg: 'dPrimaryHover.dark'}
												)}
										>
											인증번호 받기
										</Button>
									</Flex>
									<Text color={errMsg.errColor} p={4}>{errMsg.errText}</Text>
								</FormControl>
								<FormControl id="email" isRequired>
									<FormLabel>인증번호</FormLabel>
									<Flex gap={1.5}>
										{/*<Input ref={myAuthNumber} type="text" isReadOnly={!errMsg.isEmail} placeholder={'인증번호 받기 클릭 후 인증 가능'} />*/}
										<PinInput focusBorderColor={'dPrimary'} onChange={onChangePinNumber}>
											<PinInputField />
											<PinInputField />
											<PinInputField />
											<PinInputField />
											<PinInputField />
											<PinInputField />
										</PinInput>
										<Button
											onClick={onClickMatchAuthNumber}
											loadingText="Submitting"
											size="md"
											bg={'dPrimary'}
											isDisabled={!errMsg.isEmail}
											color={'white'}
											_hover={
												useColorModeValue(
													{bg: 'dPrimaryHover.dark'},
													{bg: 'dPrimaryHover.dark'}
												)}
										>
											인증하기
										</Button>
									</Flex>
									<Text color={errMsg.verificationColor} p={4}>{errMsg.verificationText}</Text>
								</FormControl>
								<FormControl id="password" isRequired>
									<FormLabel>비밀번호</FormLabel>
									<InputGroup>
										<Input focusBorderColor={'dPrimary'} ref={myPassword} onChange={onChangeMyPassword} type={showPassword ? 'text' : 'password'} isReadOnly={!errMsg.isVerified} placeholder={'숫자인증 후 비밀번호 입력 가능'}/>
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
										bg={'dPrimary'}
										isDisabled={!errMsg.isSubmitButton}
										color={'white'}
										_hover={
											useColorModeValue(
												{bg: 'dPrimaryHover.dark'},
												{bg: 'dPrimaryHover.dark'}
											)}
									>
										회원가입
									</Button>
								</Stack>
								<Stack pt={6}>
									<Text align={'center'}>
										이미 회원이신가요? <Link color={'dPrimary'} id={'linkLogIn'} onClick={() => {setAuthType('authLogin')}}>로그인</Link>
									</Text>
								</Stack>
							</Stack>
					</Box>
				</Stack>
			</Flex>
			}
			{authType === 'authLogin' &&
				<Login />
			}
		</>
	);
}
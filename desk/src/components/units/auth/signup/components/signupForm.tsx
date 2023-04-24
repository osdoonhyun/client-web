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
	Link, FormErrorMessage,
} from '@chakra-ui/react';
import {SetStateAction, useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {NextRouter, useRouter} from "next/router";
import OnClickBtLink from "@/src/components/units/auth/login/components/OnClickBtLink";
import {useMutation} from "@apollo/client";
import {AUTH_EMAIL, CREATE_USER, MATCH_AUTH_NUMBER} from "@/src/components/units/auth/queries/mutation";
import { PinInput, PinInputField } from '@chakra-ui/react'
import {
	AuthFormProps, errMsg, LoginSchema,
} from "@/src/components/units/auth/Auth.types";
import Login from "@/src/components/units/auth/login/Login.container";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

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
	const [pinNumber, setPinNumber] = useState<string | undefined>(undefined)
	const [authType, setAuthType] = useState('authSignup')
	const {
		getValues,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormProps>({
		resolver: yupResolver(LoginSchema),
		mode: "onChange",
	})
	
	const onChangePinNumber = (props: SetStateAction<string | undefined>): void => {
		setPinNumber(props)
	}
	
	const onClickCertification = async () => {
		const data = getValues()
		await authEmail({
			variables: {
				email: data.email
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
		const data = getValues()
		await matchAuthNumber({
			variables: {
				matchAuthInput: {
					email: data.email,
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
	
	const onClickSubmit = async (data: AuthFormProps) => {
		await createUser({
			variables: {
				createUserInput: {
					email: data.email,
					password: data.password,
				}
			}
		}).then(() => {
			setAuthType('authLogin')
		}).catch(() => {
			const errorMsg: string = '이미 사용중인 이메일입니다.'
			setErrMsg({...errMsg, errText: errorMsg, errColor: 'red'})
			return
		})
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
						<form onSubmit={handleSubmit(onClickSubmit)}>
							<Stack spacing={4}>
								<FormControl id="email" isInvalid={!!errors.email}>
									<FormLabel>이메일</FormLabel>
									<Flex gap={4}>
										<Input
											focusBorderColor={'dPrimary'}
											type="email"
											autoFocus={true}
											placeholder={'이메일을 입력해 주세요'}
											{...register('email')}
										/>
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
									<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
								</FormControl>
								<FormControl id="certificationNumber">
									<FormLabel>인증번호</FormLabel>
									<Flex gap={1.5}>
										<PinInput
											focusBorderColor={'dPrimary'}
											onChange={onChangePinNumber}
										>
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
								<FormControl id="password" isInvalid={!!errors.password}>
									<FormLabel>비밀번호</FormLabel>
									<InputGroup>
										<Input
											focusBorderColor={'dPrimary'}
											type={showPassword ? 'text' : 'password'}
											isReadOnly={!errMsg.isVerified}
											placeholder={'숫자인증 후 비밀번호 입력 가능'}
											{...register('password')}
										/>
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
									<FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
								</FormControl>
								<Stack spacing={10} pt={2}>
									<Button
										type={"submit"}
										loadingText="Submitting"
										size="lg"
										bg={'dPrimary'}
										isDisabled={!!errors.password}
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
						</form>
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
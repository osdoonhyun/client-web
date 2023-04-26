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
	useColorModeValue, Link, FormErrorMessage
} from '@chakra-ui/react';
import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {LOGIN} from "@/src/components/units/auth/queries/mutation";
import {AuthModalType, MyEmailSave, MyToken} from "@/src/commons/store/atom";
import {useRecoilState} from "recoil";
import SignupForm from "@/src/components/units/auth/signup/components/signupForm";
import {Cookies} from "react-cookie";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema, AuthFormProps, errorMessage} from "@/src/components/units/auth/Auth.types";
import {useRouter} from "next/router";
import NextLink from "next/link";

const cookies = new Cookies()

export default function LoginForm() {
	const [_, setMyToken] = useRecoilState(MyToken)
	const [login] = useMutation(LOGIN)
	const [err, setErr] = useState({
		errEmail: '',
		errPass: ''
	})
	const [authType, setAuthType] = useState('authLogin')
	const [myEmailSaveLocal, setMyEmailSaveLocal] = useRecoilState(MyEmailSave)
	const [isMyEmailSave, setIsMyEmailSave] = useState(false)
	const [__, setAuthModalType] = useRecoilState(AuthModalType)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormProps>({
		resolver: yupResolver(LoginSchema),
		mode: "onSubmit",
	})
	
	async function onClickLoginSubmit(data: AuthFormProps) {
		await login({
			variables: {
				loginInput: {
					email: data.email,
					password: data.password,
				}
			}
		}).then((result) => {
			setMyToken(result.data.login)
			cookies.set("myToken", result.data.login, {
				path: '/',
				secure: true,
				sameSite: "none",
			})
			setAuthModalType('AFTER_AUTH')
			if (isMyEmailSave) {
				setMyEmailSaveLocal(data.email)
			}
			router.push('/')
			
		}).catch((err) => {
			let errMail = ''
			let errPass = ''
			const msg: string|undefined = errorMessage(err.message ?? "")
			if (msg?.includes('등록되지 않은')) {
				errMail = msg
			}
			if (msg?.includes('비밀번호')) {
				errPass = msg
			}
			setErr({...err, errEmail: errMail, errPass: errPass})
			console.log('error 입니다.')
		})
	}
	
	const onChangeMyEmailCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setIsMyEmailSave(true)
		} else {
			setIsMyEmailSave(false)
		}
	}
	
	return (
		<>
		{authType === 'authLogin' &&
			<Flex
				align={'center'}
				justify={'center'}
				bg={useColorModeValue('white', 'gray.700')}
			>
				<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
					<Stack align={'center'}>
						<Heading fontSize={'4xl'}>로그인</Heading>
						<Text fontSize={'lg'} color={useColorModeValue('gray.800', 'gray.300')}>
							당신의 책상을 자랑하라! <Link as={NextLink} color={useColorModeValue('dPrimary', 'dPrimaryHover.transparency')} href={'/'}>데카이브</Link> ✌️
						</Text>
					</Stack>
					<Box
						rounded={'lg'}
						bg={useColorModeValue('white', 'gray.700')}
						p={8}>
						<Stack spacing={4}>
							<form onSubmit={handleSubmit(onClickLoginSubmit)}>
								<FormControl isInvalid={!!errors.email}>
									<FormLabel>이메일</FormLabel>
									<Input type="email"
									       autoFocus={true}
									       id={'email'}
									       focusBorderColor={'dPrimary'}
									       placeholder={'이메일 주소를 입력해 주세요'}
									       defaultValue={myEmailSaveLocal}
									       {...register('email')}
									/>
									<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
									<Text pb={4} color={'red'}>{err.errEmail}</Text>
								</FormControl>
								<FormControl isInvalid={!!errors.password}>
									<FormLabel>비밀번호</FormLabel>
									<Input type="password"
									       focusBorderColor={'dPrimary'}
									       placeholder={'비밀번호를 입력해 주세요'}
									       {...register('password')}
									/>
									<FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
									<Text pb={4} color={'red'}>{err.errPass}</Text>
								</FormControl>
								<Stack spacing={5}>
									<Stack
										direction={{base: 'column', sm: 'row'}}
										align={'start'}
										justify={'space-between'}>
										<Checkbox onChange={onChangeMyEmailCheckboxToggle}>저장하기</Checkbox>
										<Link as={NextLink} color={useColorModeValue('dPrimary', 'dPrimaryHover.transparency')} href={'/'}>비밀번호를 잊어버리셨나요?</Link>
									</Stack>
									
									<Button
										type={"submit"}
										bg={useColorModeValue('dPrimary', 'dPrimary')}
										color={'white'}
										_hover={
											useColorModeValue(
												{bg: 'dPrimaryHover.dark'},
												{bg: 'dPrimaryHover.dark'}
											)}
									>
										로그인
									</Button>
									<Button
										name='buttonJoinMember'
										onClick={() => {setAuthType('authSignup')}}
										bg={useColorModeValue('gray.200', 'gray.600')}
										border={'0px'}
										borderColor={'dPrimary'}
										// color={'white'}
										_hover={
											useColorModeValue(
												{bg: 'gray.300'},
												{bg: 'gray.500'}
											)}
									>
										회원가입
									</Button>
								</Stack>
								
							</form>
						</Stack>
					</Box>
				</Stack>
			</Flex>
		}
		{authType === 'authSignup' &&
			<SignupForm />
		}
	</>
	);
}
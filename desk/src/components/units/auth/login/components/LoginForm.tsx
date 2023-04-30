import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { FETCH_LOGIN_USER, LOGIN } from '@/src/components/units/auth/queries/mutation'
import { AuthModalType, MyEmailSave, MyToken, MyUserInfo } from '@/src/commons/store/atom'
import { useRecoilState } from 'recoil'
import SignupForm from '@/src/components/units/auth/signup/components/signupForm'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  AuthFormProps,
  errorMessage,
  LoginSchema,
} from '@/src/components/units/auth/Auth.types'
import { useRouter } from 'next/router'
import ForgotPassword from '@/src/components/units/auth/forgotPassword/ForgotPassword.container'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'
import { AiFillGoogleCircle } from 'react-icons/ai'

export default function LoginForm() {
  const [, setMyToken] = useRecoilState(MyToken)
  const [login] = useMutation(LOGIN)
  const [err, setErr] = useState({
    errEmail: '',
    errPass: '',
    errServer: '',
  })
  const [authType, setAuthType] = useState('authLogin')
  const [myEmailSaveLocal, setMyEmailSaveLocal] = useRecoilState(MyEmailSave)
  const [myUserInfo, setMyUserInfo] = useRecoilState(MyUserInfo)
  const [isMyEmailSave, setIsMyEmailSave] = useState(false)
  const [, setAuthModalType] = useRecoilState(AuthModalType)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormProps>({
    resolver: yupResolver(LoginSchema),
    mode: 'onSubmit',
  })
  const { data: loginUserData } = useQuery(FETCH_LOGIN_USER)
  const bgColor = {
    whiteAndGray700: useColorModeValue('white', 'gray.700'),
    gray200AndGray600: useColorModeValue('gray.200', 'gray.600'),
  }
  const color = {
    gray600AndGray300: useColorModeValue('gray.600', 'gray.300'),
    dPrimaryAndDprimaryHoverTransparency: useColorModeValue(
      'dPrimary',
      'dPrimaryHover.transparency',
    ),
  }
  const hover = {
    gray300AndGray500: useColorModeValue({ bg: 'gray.300' }, { bg: 'gray.500' }),
  }

  async function onClickLoginSubmit(data: AuthFormProps) {
    await login({
      variables: {
        loginInput: {
          email: data.email,
          password: data.password,
        },
      },
    })
      .then(result => {
        setMyToken(result.data.login)
        setAuthModalType('AFTER_AUTH')
        if (isMyEmailSave) {
          setMyEmailSaveLocal(data.email)
        }
        console.log(loginUserData.fetchLoginUser)
        setMyUserInfo({ ...loginUserData.fetchLoginUser })
        router.push('/')
      })
      .catch(err => {
        let errMail = ''
        let errPass = ''
        let errServer = ''
        console.log(err.message)
        const msg: string | undefined = errorMessage(err.message ?? '')
        if (msg?.includes('등록되지 않은')) {
          errMail = msg
        }
        if (msg?.includes('비밀번호')) {
          errPass = msg
        }
        if (msg?.includes('Failed')) {
          errServer = msg
          console.log('errServer')
          console.log(errServer)
        }
        setErr({ ...err, errEmail: errMail, errPass: errPass, errServer: errServer })
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
      {authType === 'authLogin' && (
        <Flex align={'center'} justify={'center'} bg={bgColor.whiteAndGray700}>
          <Stack spacing={0} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>로그인</Heading>
              <Text fontSize={'lg'} color={color.gray600AndGray300}>
                당신의 책상을 자랑하라!{' '}
                <Link color={color.dPrimaryAndDprimaryHoverTransparency} href={'/'}>
                  데카이브
                </Link>{' '}
                ✌️
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={bgColor.whiteAndGray700} p={8}>
              <Stack spacing={4}>
                <form onSubmit={handleSubmit(onClickLoginSubmit)}>
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel>이메일</FormLabel>
                    <Input
                      type="email"
                      autoFocus={!myEmailSaveLocal}
                      id={'email'}
                      focusBorderColor={'dPrimary'}
                      placeholder={'이메일 주소를 입력해 주세요'}
                      defaultValue={myEmailSaveLocal}
                      {...register('email')}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                    <Text pb={4} color={'red'}>
                      {err.errEmail}
                    </Text>
                  </FormControl>
                  <FormControl isInvalid={!!errors.password}>
                    <FormLabel>비밀번호</FormLabel>
                    <Input
                      type="password"
                      autoFocus={myEmailSaveLocal}
                      focusBorderColor={'dPrimary'}
                      placeholder={'비밀번호를 입력해 주세요'}
                      {...register('password')}
                    />
                    <FormErrorMessage>
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                    <Text pb={4} color={'red'}>
                      {err.errPass}
                    </Text>
                  </FormControl>
                  <Stack spacing={5}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox
                        iconColor={'white'}
                        borderColor={'dPrimary'}
                        onChange={onChangeMyEmailCheckboxToggle}>
                        저장하기
                      </Checkbox>
                      <Link
                        color={color.gray600AndGray300}
                        onClick={() => {
                          setAuthType('forgotPassword')
                        }}>
                        비밀번호를 잊어버리셨나요?
                      </Link>
                    </Stack>
                    <Text color={'red'}>{err.errServer}</Text>

                    {myUserInfo?.provider === 'dechive' ? (
                      <Tooltip hasArrow label="마지막 로그인" bg="red.300" isOpen>
                        <Button
                          type={'submit'}
                          bg={'dPrimary'}
                          color={'white'}
                          _hover={{ bg: 'dPrimaryHover.dark' }}>
                          로그인
                        </Button>
                      </Tooltip>
                    ) : (
                      <Button
                        type={'submit'}
                        bg={'dPrimary'}
                        color={'white'}
                        _hover={{ bg: 'dPrimaryHover.dark' }}>
                        로그인
                      </Button>
                    )}
                    <HStack>
                      <Link href={'https://mobomobo.shop/login/kakao'}>
                        {myUserInfo?.provider === 'kakao' ? (
                          <Tooltip hasArrow label="마지막 로그인" bg="red.300" isOpen>
                            <Button colorScheme="yellow" leftIcon={<RiKakaoTalkFill />}>
                              Kakao
                            </Button>
                          </Tooltip>
                        ) : (
                          <Button colorScheme="yellow" leftIcon={<RiKakaoTalkFill />}>
                            Kakao
                          </Button>
                        )}
                      </Link>
                      {myUserInfo?.provider === 'naver' ? (
                        <Tooltip hasArrow label="마지막 로그인" bg="red.300" isOpen>
                          <Link href={'https://mobomobo.shop/login/naver'}>
                            <Button colorScheme="green" leftIcon={<SiNaver />}>
                              Naver
                            </Button>
                          </Link>
                        </Tooltip>
                      ) : (
                        <Link href={'https://mobomobo.shop/login/naver'}>
                          <Button colorScheme="green" leftIcon={<SiNaver />}>
                            Naver
                          </Button>
                        </Link>
                      )}
                      {myUserInfo?.provider === 'google' ? (
                        <Tooltip hasArrow label="마지막 로그인" bg="red.300" isOpen>
                          <Link href={'https://mobomobo.shop/login/google'}>
                            <Button
                              colorScheme="blackAlpha"
                              leftIcon={<AiFillGoogleCircle />}>
                              Google
                            </Button>
                          </Link>
                        </Tooltip>
                      ) : (
                        <Link href={'https://mobomobo.shop/login/google'}>
                          <Button
                            colorScheme="blackAlpha"
                            leftIcon={<AiFillGoogleCircle />}>
                            Google
                          </Button>
                        </Link>
                      )}
                    </HStack>
                    <Button
                      name="buttonJoinMember"
                      onClick={() => {
                        setAuthType('authSignup')
                      }}
                      bg={bgColor.gray200AndGray600}
                      border={'0px'}
                      borderColor={'dPrimary'}
                      // color={'white'}
                      _hover={hover.gray300AndGray500}>
                      회원가입
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
      {authType === 'authSignup' && <SignupForm />}
      {authType === 'forgotPassword' && <ForgotPassword />}
    </>
  )
}

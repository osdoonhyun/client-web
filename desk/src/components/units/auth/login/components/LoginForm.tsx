import { useAuth } from '@/src/commons/hooks/useAuth'
import { MyEmailSave } from '@/src/commons/store/atom'
import { AuthFormProps, loginSchema } from '@/src/components/units/auth/Auth.types'
import ForgotPassword from '@/src/components/units/auth/forgotPassword/ForgotPassword.container'
import SignupForm from '@/src/components/units/auth/signup/components/signupForm'
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
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'
import { useRecoilState } from 'recoil'

type TCurrentModalType = 'LOGIN' | 'SIGNUP' | 'FORGOT_PASSWORD'

type TSnsLinksProps = {
  name: string
  buttonColor: string
  leftIcon: JSX.Element
}

const snsLinks: TSnsLinksProps[] = [
  { name: 'kakao', buttonColor: 'yellow', leftIcon: <RiKakaoTalkFill /> },
  { name: 'naver', buttonColor: 'green', leftIcon: <SiNaver /> },
  { name: 'google', buttonColor: 'gray', leftIcon: <AiFillGoogleCircle /> },
]

export default function LoginForm() {
  const router = useRouter()
  const { login, myUserInfo } = useAuth()

  const [currentModalType, setCurrentModalType] = useState<TCurrentModalType>('LOGIN')
  const [myEmailSaveLocal, setMyEmailSaveLocal] = useRecoilState(MyEmailSave)
  const [isCheckedSaveEmail, setIsCheckedSaveEmail] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormProps>({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  })

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
    await login(data.email, data.password).then(() => {
      if (isCheckedSaveEmail) {
        setMyEmailSaveLocal(data.email)
      }

      router.push('/')
    })
  }

  const onChangeMyEmailCheckboxToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCheckedSaveEmail(e.target.checked)
  }

  return (
    <>
      {currentModalType === 'LOGIN' && (
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
              <VStack>
                <form onSubmit={handleSubmit(onClickLoginSubmit)}>
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel mt={'20px'}>이메일</FormLabel>
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
                  </FormControl>
                  <FormControl isInvalid={!!errors.password}>
                    <FormLabel mt={'20px'}>비밀번호</FormLabel>
                    <Input
                      type="password"
                      autoFocus={!!myEmailSaveLocal}
                      focusBorderColor={'dPrimary'}
                      placeholder={'비밀번호를 입력해 주세요'}
                      {...register('password')}
                    />
                    <FormErrorMessage>
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Stack spacing={5} mt={'10px'}>
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
                          setCurrentModalType('FORGOT_PASSWORD')
                        }}>
                        비밀번호를 잊어버리셨나요?
                      </Link>
                    </Stack>

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
                      {snsLinks?.map(({ buttonColor, leftIcon, name }) => {
                        return (
                          <Link href={`https://mobomobo.shop/login/${name}`} key={name}>
                            {myUserInfo?.provider === name ? (
                              <Tooltip hasArrow label="마지막 로그인" bg="red.300" isOpen>
                                <Button colorScheme={buttonColor} leftIcon={leftIcon}>
                                  {name.charAt(0).toUpperCase() + name.slice(1)}
                                </Button>
                              </Tooltip>
                            ) : (
                              <Button colorScheme={buttonColor} leftIcon={leftIcon}>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                              </Button>
                            )}
                          </Link>
                        )
                      })}
                    </HStack>
                    <Button
                      name="buttonJoinMember"
                      onClick={() => {
                        setCurrentModalType('SIGNUP')
                      }}
                      bg={bgColor.gray200AndGray600}
                      border={'0px'}
                      borderColor={'dPrimary'}
                      _hover={hover.gray300AndGray500}>
                      회원가입
                    </Button>
                  </Stack>
                </form>
              </VStack>
            </Box>
          </Stack>
        </Flex>
      )}
      {currentModalType === 'SIGNUP' && <SignupForm />}
      {currentModalType === 'FORGOT_PASSWORD' && <ForgotPassword />}
    </>
  )
}

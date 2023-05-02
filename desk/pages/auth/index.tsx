import { Button, Flex, VStack } from '@chakra-ui/react'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function LoginPage() {
  const {
    isLoggedIn,
    LoginModalUI,
    SignupModalUI,
    SignoutModalUI,
    openModal,
    logout,
    signout,
  } = useAuth()
  return (
    <Flex justify={'center'} minH={'100vh'} align={'center'}>
      <VStack>
        {!isLoggedIn ? (
          <>
            <LoginModalUI />
            <SignupModalUI />
            <Button onClick={() => openModal('LOGIN')}>로그인</Button>
            <Button onClick={() => openModal('SIGNUP')}>회원가입</Button>
          </>
        ) : (
          <>
            <SignoutModalUI />
            <Button onClick={logout}>로그아웃</Button>
            <Button onClick={signout}>회원탈퇴</Button>
          </>
        )}
      </VStack>
    </Flex>
  )
}

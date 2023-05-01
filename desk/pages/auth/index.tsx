import { Button, Flex, VStack } from '@chakra-ui/react'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function LoginPage() {
  const {
    isLoggedIn,
    LoginUI,
    SignupUI,
    SignoutUI,
    openModal,
    onClickLogout,
    onClickSignout,
  } = useAuth()
  return (
    <Flex justify={'center'} minH={'100vh'} align={'center'}>
      <VStack>
        {!isLoggedIn ? (
          <>
            <LoginUI />
            <SignupUI />
            <Button onClick={() => openModal('LOGIN')}>로그인</Button>
            <Button onClick={() => openModal('SIGNUP')}>회원가입</Button>
          </>
        ) : (
          <>
            <SignoutUI />
            <Button onClick={onClickLogout}>로그아웃</Button>
            <Button onClick={onClickSignout}>회원탈퇴</Button>
          </>
        )}
      </VStack>
    </Flex>
  )
}

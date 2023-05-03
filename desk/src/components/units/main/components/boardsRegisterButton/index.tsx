import styled from '@emotion/styled'
import { Button, Container } from '@chakra-ui/react'
import { BsPencil } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useAuth } from '@/src/commons/hooks/useAuth'

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 70px;
  right: 70px;

  @media only screen and (max-width: 768px) {
    bottom: 7%;
    right: 50%;
    transform: translate(50%, 50%);
  }
`

export default function boardsRegisterButton() {
  const { isLoggedIn, openModal } = useAuth()
  const router = useRouter()

  const onClickMoveToBoardsRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoggedIn) {
      e.preventDefault()
      openModal('LOGIN')
    } else {
      router.push('/boards/register')
    }
  }

  return (
    <Container display="flex" justifyContent="end">
      <StyledButton
        onClick={onClickMoveToBoardsRegister}
        bg="dPrimary"
        color="white"
        width="55px"
        height="55px"
        borderRadius="full"
        _hover={{ bg: 'dPrimaryHover.dark' }}>
        <BsPencil size={25} />
      </StyledButton>
    </Container>
  )
}

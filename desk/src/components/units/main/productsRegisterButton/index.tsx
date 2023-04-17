import { useRouter } from 'next/router'
import { Button, Container } from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'

export default function ProductsRegisterButton() {
  const router = useRouter()
  const onClickMoveToProductsRegister = () => {
    router.push('./products/register')
  }

  return (
    <>
      <Container maxW="1550px" display="flex" justifyContent="end">
        <Button
          onClick={onClickMoveToProductsRegister}
          leftIcon={<BsPencilSquare />}
          bg="dPrimary"
          color="white"
          _hover={{ bg: '#575ce0' }}>
          내 책상 자랑하기
        </Button>
      </Container>
    </>
  )
}

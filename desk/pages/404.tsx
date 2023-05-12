import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Error404Page() {
  const router = useRouter()

  return (
    <Box textAlign="center" py={10} px={6} mt={100}>
      <Heading
        display="inline-block"
        as="h1"
        size="3xl"
        bgGradient="linear(to-r, #9397ff, dPrimary)"
        backgroundClip="text">
        404
      </Heading>
      <Text
        mt={3}
        mb={2}
        fontSize="2xl"
        fontWeight={700}
        color={useColorModeValue('gray.500', 'dGray.medium')}>
        Page Not Found
      </Text>
      <Text mb={6} color={'gray.500'} fontWeight={500}>
        오류가 발생했습니다. 다시 시도해 주세요.
      </Text>
      <Button
        mt={'30px'}
        bgGradient="linear(to-r, #9397ff, dPrimary,dPrimaryHover.darker)"
        color="white"
        variant="solid"
        onClick={() => router.push('/')}>
        Go to Home
      </Button>
    </Box>
  )
}

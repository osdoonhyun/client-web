import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function ErrorPage() {
  const router = useRouter()

  return (
    <Box textAlign="center" py={10} px={6} mt={50}>
      <Heading
        display="inline-block"
        as="h1"
        size="3xl"
        bgGradient="linear(to-r, blue.400, blue.600)"
        backgroundClip="text">
        500
      </Heading>
      <Text fontSize="xl" mt={3} mb={2}>
        Internal Server Error
      </Text>
      <Button
        mt={'30px'}
        colorScheme="blue"
        bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
        color="white"
        variant="solid"
        onClick={() => router.push('/')}>
        Go to Home
      </Button>
    </Box>
  )
}

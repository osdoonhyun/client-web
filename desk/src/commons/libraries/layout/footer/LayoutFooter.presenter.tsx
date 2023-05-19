import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

const LogoText = (props: any) => {
  return (
    <>
      <Box color="gray.400">
        <Text
          as="b"
          pb={2}
          letterSpacing={0.5}
          fontWeight={'800'}
          fontSize={{ base: '2xl', md: '26px' }}>
          Team dechive
          <Text as="b" fontSize="40px" ml="5px" mb="50px">
            .
          </Text>
        </Text>
      </Box>
    </>
  )
}

const SocialButton = ({ children }: { children: ReactNode; label: string }) => {
  return (
    <Box
      w={8}
      h={8}
      rounded={'full'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}>
      {children}
    </Box>
  )
}

export default function LayoutFooterUI() {
  return (
    <Box py={4} mt={16} mb={3} bg={useColorModeValue('white', 'gray.900')}>
      <Container
        as={Stack}
        spacing={4}
        p={2}
        maxW={'95%'}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        color={useColorModeValue('gray.500', 'dGray.medium')}>
        <LogoText />
        <Text fontWeight={500} letterSpacing={0.5}>
          © 2023 dechive. All rights reserved
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'GitHub'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Instagram'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'YouTube'}>
            <FaYoutube />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

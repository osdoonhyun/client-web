import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

// 테스트를 위해 만든 <회원탈퇴> 페이지 입니다.
export default function SignoutForm(): JSX.Element {
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          회원탈퇴
        </Heading>
        <FormControl id="userName">
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo"></Avatar>
            </Center>
            <Center w="full">
              <Button w="full">회원탈퇴</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName">
          <FormLabel>닉네임</FormLabel>
          <Input
            placeholder="홍길동"
            readOnly
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>이메일</FormLabel>
          <Input
            placeholder="hongildong@naver.com"
            readOnly
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
      </Stack>
    </Flex>
  )
}

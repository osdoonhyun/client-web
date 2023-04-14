import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

export default function LoginForm() {
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>로그인</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						당신의 책상을 자랑하라! <Link color={'blue.400'}>데카이브</Link> ✌️
					</Text>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>
					<Stack spacing={4}>
						<FormControl id="email">
							<FormLabel>이메일</FormLabel>
							<Input type="email"
								placeholder={'이메일 주소를 입력 해 주세요'}/>
						</FormControl>
						<FormControl id="password">
							<FormLabel>비밀번호</FormLabel>
							<Input type="password"
								placeholder={'비밀번호를 입력 해 주세요'}/>
						</FormControl>
						<Stack spacing={5}>
							<Stack
								direction={{ base: 'column', sm: 'row' }}
								align={'start'}
								justify={'space-between'}>
								<Checkbox>저장하기</Checkbox>
								<Link color={'blue.400'}>비번찾기</Link>
							</Stack>
							<Button
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}>
								로그인
							</Button>
							<Button
								
								bg={'white'}
								border={'1px'}
								borderColor={'blue.500'}
								// color={'white'}
								_hover={{
									bg: 'blue.100',
								}}>
								회원가입
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
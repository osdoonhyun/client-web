import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	useColorModeValue,
	Avatar,
	Center,
} from '@chakra-ui/react';

export default function LogoutForm(): JSX.Element {
	return (
		<Flex
			align={'center'}
			justify={'center'}
		>
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
					로그아웃
				</Heading>
				<FormControl id="userName">
					{/*<FormLabel>User Icon</FormLabel>*/}
					<Stack direction={['column', 'row']} spacing={6}>
						<Center>
							<Avatar size="xl" src="https://bit.ly/sage-adebayo">
								{/*<AvatarBadge*/}
								{/*	as={IconButton}*/}
								{/*	size="sm"*/}
								{/*	rounded="full"*/}
								{/*	top="-10px"*/}
								{/*	colorScheme="red"*/}
								{/*	aria-label="remove Image"*/}
								{/*	icon={<SmallCloseIcon />}*/}
								{/*/>*/}
							</Avatar>
						</Center>
						<Center w="full">
							<Button w="full">로그아웃</Button>
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
				{/*<Stack spacing={6} direction={['column', 'row']}>*/}
				{/*	<Button*/}
				{/*		bg={'red.400'}*/}
				{/*		color={'white'}*/}
				{/*		w="full"*/}
				{/*		_hover={{*/}
				{/*			bg: 'red.500',*/}
				{/*		}}>*/}
				{/*		취소*/}
				{/*	</Button>*/}
				{/*	<Button*/}
				{/*		bg={'blue.400'}*/}
				{/*		color={'white'}*/}
				{/*		w="full"*/}
				{/*		_hover={{*/}
				{/*			bg: 'blue.500',*/}
				{/*		}}>*/}
				{/*		로그아웃*/}
				{/*	</Button>*/}
				{/*</Stack>*/}
			</Stack>
		</Flex>
	);
}
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Signup from "@/src/components/units/auth/signup/Signup.container";
import {useRecoilState} from "recoil";
import {IsOn, IsOn2} from "@/src/commons/store/atom";
import {useEffect} from "react";

export default function SignupIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	// 현재 바라보고 있는 상태값 로그인인지, 회원가입인지
	const [on] = useRecoilState(IsOn)
	// 계속 쌓이는 숫자값, useEffect가 상태값 변경에 따라 작동되게 하기 위해서
	const [on2] = useRecoilState(IsOn2)
	
	useEffect(() => {
		if (on === "SIGNUP") {
			onOpen()
		}
	}, [on, on2]);
	
	return (
		<Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Signup />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
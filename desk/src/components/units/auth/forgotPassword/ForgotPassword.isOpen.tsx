import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {AuthModalType, AuthModalToggle} from "@/src/commons/store/atom";
import {useEffect} from "react";
import ForgotPassword from "@/src/components/units/auth/forgotPassword/ForgotPassword.container";

export default function ForgotPasswordIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	// 현재 바라보고 있는 상태값 로그인인지, 회원가입인지, 비밀번호찾기인지
	const [authModalType] = useRecoilState(AuthModalType)
	// 토글값, useEffect가 상태값 변경에 따라 작동되게 하기 위해서
	const [authModalToggle] = useRecoilState(AuthModalToggle)
	
	useEffect(() => {
		if (authModalType === "FORGOT_PASSWORD") {
			onOpen()
		} else if (authModalType === "AFTER_AUTH") {
			onClose()
		}
	}, [authModalType, authModalToggle]);
	
	return (
		<Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<ForgotPassword />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
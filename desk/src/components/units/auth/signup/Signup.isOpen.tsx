import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Signup from "@/src/components/units/auth/signup/Signup.container";

export default function SignupIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	
	return (
		<Box>
			<Button onClick={onOpen}>
				회원가입
			</Button>
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
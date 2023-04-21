import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Login from "@/src/components/units/auth/login/Login.container";

export default function LoginIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	
	return (
		<Box>
			<Button onClick={onOpen}>
				로그인
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Login />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
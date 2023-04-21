import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Logout from "@/src/components/units/auth/logout/Logout.container";

export default function LogoutIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	
	return (
		<Box>
			<Button onClick={onOpen}>
				로그아웃
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Logout />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
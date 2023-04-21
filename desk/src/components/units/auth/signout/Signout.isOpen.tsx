import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Signout from "@/src/components/units/auth/signout/Signout.container";

export default function SignoutIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	
	return (
		<Box>
			<Button onClick={onOpen}>
				회원탈퇴
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Signout />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
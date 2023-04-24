import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Login from "@/src/components/units/auth/login/Login.container";
import {useRecoilState} from "recoil";
import {AuthModalType, AuthModalToggle} from "@/src/commons/store/atom";
import {useEffect} from "react";

export default function LoginIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	const [authModalType] = useRecoilState(AuthModalType)
	const [authModalToggle] = useRecoilState(AuthModalToggle)
	
	useEffect(() => {
		if (authModalType === "LOGIN") {
			onOpen()
		}
	}, [authModalType, authModalToggle]);

	return (
		<Box>
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
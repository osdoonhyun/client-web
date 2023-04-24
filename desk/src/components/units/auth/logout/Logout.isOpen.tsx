import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Logout from "@/src/components/units/auth/logout/Logout.container";
import {useRecoilState} from "recoil";
import {AuthModalType, AuthModalToggle} from "@/src/commons/store/atom";
import {useEffect} from "react";

export default function LogoutIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	const [authModalType] = useRecoilState(AuthModalType)
	const [authModalToggle] = useRecoilState(AuthModalToggle)
	
	useEffect(() => {
		if (authModalType === "LOGOUT") {
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
						<Logout />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
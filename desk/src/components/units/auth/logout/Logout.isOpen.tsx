import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Logout from "@/src/components/units/auth/logout/Logout.container";
import {useRecoilState} from "recoil";
import {IsOn, IsOn2} from "@/src/commons/store/atom";
import {useEffect} from "react";

export default function LogoutIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	const [on] = useRecoilState(IsOn)
	const [on2] = useRecoilState(IsOn2)
	
	useEffect(() => {
		if (on === "LOGOUT") {
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
						<Logout />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
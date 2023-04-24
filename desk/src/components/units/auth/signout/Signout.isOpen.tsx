import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton, useDisclosure, Box,
} from "@chakra-ui/react";
import Signout from "@/src/components/units/auth/signout/Signout.container";
import {useRecoilState} from "recoil";
import {IsOn, IsOn2} from "@/src/commons/store/atom";
import {useEffect} from "react";

export default function SignoutIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [on] = useRecoilState(IsOn)
	const [on2] = useRecoilState(IsOn2)
	
	useEffect(() => {
		if (on === "SIGNOUT") {
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
						<Signout />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
import {
	Button,
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

type SignupIsOpenProps = {
	onOpen ?: () => void
	isOpen : boolean
	onClose: () => void
}


export default function SignupIsOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
	const [on, setOn] = useRecoilState(IsOn)
	const [on2, setOn2] = useRecoilState(IsOn2)
	
	useEffect(() => {
		if (on === 2) {
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
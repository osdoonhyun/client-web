import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Signout from '@/src/components/units/auth/signout/Signout.container'
import { useRecoilState } from 'recoil'
import { AuthModalToggle, AuthModalType } from '@/src/commons/store/atom'
import { useEffect } from 'react'

export default function SignoutIsOpen() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [authModalType] = useRecoilState(AuthModalType)
  const [authModalToggle] = useRecoilState(AuthModalToggle)

  useEffect(() => {
    if (authModalType === 'SIGNOUT') {
      onOpen()
    } else if (authModalType === 'AFTER_AUTH') {
      onClose()
    }
  }, [authModalType, authModalToggle, onOpen, onClose])

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

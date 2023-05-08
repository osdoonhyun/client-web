import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Login from '@/src/components/units/auth/login/Login.container'
import { useRecoilState } from 'recoil'
import { AuthModalToggle, AuthModalType } from '@/src/commons/store/atom'
import { useEffect } from 'react'

export default function LoginIsOpen() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
  const [authModalType] = useRecoilState(AuthModalType)
  const [authModalToggle] = useRecoilState(AuthModalToggle)

  useEffect(() => {
    if (authModalType === 'LOGIN') {
      onOpen()
      // setAuthModalType('')
    } else if (authModalType === 'AFTER_AUTH') {
      onClose()
    }
  }, [authModalType, authModalToggle, onOpen, onClose])

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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

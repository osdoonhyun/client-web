import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Checkbox,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'

// 활성화 되면 hover
export default function SignoutModalButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const onClickSignOutButton = () => {
    if (isChecked) {
      // TODO: 회원 탈퇴 로직 추가

      onClose()
    }
  }

  const onChangeCheckboxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <>
      <Button
        color={useColorModeValue('#fff', '#1A202C')}
        bg={useColorModeValue('red.400', 'red.200')}
        _hover={{ bg: 'red.300' }}
        onClick={onOpen}>
        회원 탈퇴
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>회원 탈퇴</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
            </Text>
            <Checkbox
              iconColor="red.300"
              borderColor="dPrimary"
              colorScheme="whiteAlpha"
              isChecked={isChecked}
              onChange={onChangeCheckboxChecked}>
              해당 내용을 확인했으며, 회원 탈퇴에 동의합니다.
            </Checkbox>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              mr={3}
              color={useColorModeValue('#fff', '#1A202C')}
              bg={useColorModeValue('red.400', 'red.200')}
              _hover={{ bg: 'red.300' }}
              isDisabled={!isChecked}
              onClick={onClickSignOutButton}>
              회원 탈퇴
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

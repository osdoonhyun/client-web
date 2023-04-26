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
} from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'

// 활성화 되면 hover
export default function SignOutButton() {
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
      <Button onClick={onOpen}>회원 탈퇴</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>회원 탈퇴</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
            </Text>
            <Checkbox isChecked={isChecked} onChange={onChangeCheckboxChecked}>
              해당 내용을 확인했으며, 회원 탈퇴에 동의합니다.
            </Checkbox>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              color="dPrimary"
              mr={3}
              // TODO:추후에 효과 추가
              _hover={!isChecked ? {} : {}}
              onClick={onClickSignOutButton}>
              회원 탈퇴
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
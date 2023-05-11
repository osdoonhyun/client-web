import { useAuth } from '@/src/commons/hooks/useAuth'
import { getConvertedDate } from '@/src/commons/utils/util'
import {
  Avatar,
  Badge,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ProfileHeaderProps } from './types'
import { useMutation } from '@apollo/client'
import { DELETE_BOARD } from '../../detail/Detail.queries'
import { TMutation, TMutationDeleteBoardArgs } from '@/src/commons/types/generated/types'
import { useState } from 'react'

export default function ProfileHeader(props: ProfileHeaderProps) {
  const router = useRouter()
  const toast = useToast()
  const { isWrittenBy } = useAuth()

  const [deleteBoard] = useMutation<
    Pick<TMutation, 'deleteBoard'>,
    TMutationDeleteBoardArgs
  >(DELETE_BOARD)

  const onClickMoveToUserPage = () => {
    router.push(`/${props.userData.id}`)
  }

  const onClickMoveToDetailPage = () => {
    router.push(`/boards/${props.boardId}/edit`)
  }

  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const onClickDeleteDetailPage = () => {
    setShowConfirmModal(true)
  }

  const onClickDeleteConfirm = () => {
    deleteBoard({ variables: { boardid: props.boardId } })
      .then(res => res.data?.deleteBoard)
      .then(isCompletion => {
        if (isCompletion) {
          toast({
            title: '성공',
            description: '삭제 완료',
            status: 'success',
            position: 'top',
          })

          router.push(`/`)
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({
            title: '에러',
            description: error.message,
            status: 'error',
            position: 'top',
          })
        }
      })
    setShowConfirmModal(false)
  }

  return (
    <Flex justify={'space-between'} align={'center'} mt={2} mb={3}>
      <HStack spacing={'10px'} onClick={onClickMoveToUserPage} cursor={'pointer'}>
        <Avatar
          size={'sm'}
          src={
            props.userData.picture ? props.userData.picture : 'https://bit.ly/broken-link'
          }
        />
        <Text fontWeight={700} fontSize={16}>
          {props.userData.nickName}
        </Text>
        <Badge bgColor="dPrimary" color="white" fontWeight={'bold'}>
          {props.userData.jobGroup}
        </Badge>
      </HStack>

      <HStack spacing={'10px'}>
        <Text
          mr={2}
          fontSize={'11pt'}
          fontWeight={300}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          {getConvertedDate(props.createdAt)}
        </Text>
        {isWrittenBy(props.userData.id) && (
          <>
            <Button
              variant={'outline'}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}
              borderColor={useColorModeValue('dGray.dark', 'dGray.medium')}
              size={'sm'}
              h="28px"
              onClick={onClickMoveToDetailPage}>
              수정
            </Button>
            <Button
              variant={'outline'}
              color="dRed.500"
              borderColor={'dRed.500'}
              colorScheme="dRed"
              size={'sm'}
              h="28px"
              onClick={onClickDeleteDetailPage}>
              삭제
            </Button>
          </>
        )}
      </HStack>

      {/* 삭제 확인 모달창 추가 */}
      <Modal isOpen={showConfirmModal} onClose={() => setShowConfirmModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>삭제 확인</ModalHeader>
          <ModalBody>
            <Text fontSize="11pt" color="dGray.dark">
              삭제한 게시물은 다시 복구할 수 없습니다. 정말 삭제하시겠습니까?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setShowConfirmModal(false)}>
              취소
            </Button>
            <Button colorScheme="red" ml={3} onClick={onClickDeleteConfirm}>
              삭제
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

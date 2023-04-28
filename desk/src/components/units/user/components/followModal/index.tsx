import InfiniteScroller from '@/src/components/ui/infiniteScroller'
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
  Card,
  CardBody,
  Text,
  VStack,
  Flex,
  IconButton,
  Box,
  Divider,
  Avatar,
} from '@chakra-ui/react'
import { MdPersonOutline } from 'react-icons/md'
import { FollowModalProps } from './FollowModal.types'
import { useAuth } from '@/src/commons/hooks/useAuth'

// 테스트용 FOLLOWERS API 연결 후 삭제 예정
const FOLLOWERS = [
  {
    id: 0,
    name: 'Dan Abrahmov',
    src: 'https://bit.ly/dan-abramov',
    connections: 46,
  },
  {
    id: 1,
    name: 'Kola Tioluwani',
    src: 'https://bit.ly/tioluwani-kolawole',
    connections: 123,
  },
  {
    id: 2,
    name: 'Kent Dodds',
    src: 'https://bit.ly/kent-c-dodds',
    connections: 436,
  },
  {
    id: 3,
    name: 'Ryan Florence',
    src: 'https://bit.ly/ryan-florence',
    connections: 6,
  },
  {
    id: 4,
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
    connections: 1146,
  },
  {
    id: 5,
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
    connections: 23,
  },
]

export default function FollowModal(props: FollowModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { openModal } = useAuth()

  const onClickModalButton = () => {
    if (props.isLoggedIn) {
      // 비 로그인 시 로그인 창 오픈
      openModal('LOGIN')
    } else {
      // 로그인 시 팔로워/팔로우 모달 창 오픈
      onOpen()
    }
  }

  return (
    <>
      <Text
        fontSize="18px"
        fontWeight="600"
        cursor="pointer"
        onClick={() => onClickModalButton()}>
        {props.type === 'follower' ? '팔로워' : '팔로우'} 123
      </Text>

      <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto" p="12px">
            {props.type === 'follower' ? '팔로워' : '팔로우'}
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody p="12px 12px 8px">
            <InfiniteScroller loadMore={() => console.log('테스트')} hasMore={true}>
              <VStack>
                {/* 테스트용 FOLLOWERS */}
                {FOLLOWERS.map(data => (
                  <Card key={data.id} w="100%" variant="elevated" px="10px">
                    <CardBody p="0px">
                      <Flex py="6px" justify="space-between" align="center">
                        <Flex align="center">
                          <Avatar mr="10px" name={data.name} src={data.src} />
                          <VStack align="flex-start">
                            <Text fontSize="14px" fontWeight="600">
                              {data.name}
                            </Text>
                            <Text fontSize="12px">{data.connections} Connections</Text>
                          </VStack>
                        </Flex>
                        <IconButton
                          variant="outline"
                          color="dPrimary"
                          bg="white"
                          borderColor="dPrimary"
                          border="2px"
                          aria-label="follow"
                          fontSize="25px"
                          icon={<MdPersonOutline />}
                        />
                      </Flex>
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            </InfiniteScroller>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

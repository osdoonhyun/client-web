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
import { TQuery } from '@/src/commons/types/generated/types'
import { FETCH_FOLLOWEES, FETCH_FOLLOWINGS } from './FollowModal.queries'
import { useQuery } from '@apollo/client'

export default function FollowModal(props: FollowModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { openModal } = useAuth()

  const { data: followeesData } = useQuery<Pick<TQuery, 'fetchFollowees'>>(
    FETCH_FOLLOWEES,
    {
      variables: { userid: props.userid as string },
    },
  )
  const { data: followingsData } = useQuery<Pick<TQuery, 'fetchFollowings'>>(
    FETCH_FOLLOWINGS,
    {
      variables: { userid: props.userid as string },
    },
  )

  console.log('userId', props.userid, followeesData)
  const followees = followeesData?.fetchFollowees.user ?? []
  const followings = followingsData?.fetchFollowings.user ?? []

  const FOLLOW_DATA = props.type === 'follower' ? followees : followings

  const onClickModalButton = () => {
    console.log('로그인 됨', props.isLoggedIn)
    if (!props.isLoggedIn) {
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
        {props.type === 'follower'
          ? `팔로워 ${props.followCount}`
          : `팔로우 ${props.followCount}`}
      </Text>

      <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="400px">
          <ModalHeader mx="auto" p="12px">
            {props.type === 'follower' ? '팔로워' : '팔로우'}
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody p="12px 12px 8px" overflow="auto">
            <InfiniteScroller loadMore={() => console.log('테스트')} hasMore={true}>
              <VStack>
                {/* 테스트용 FOLLOWERS */}
                {FOLLOW_DATA.map(data => (
                  <Card key={data.id} w="100%" variant="elevated" px="10px">
                    <CardBody p="0px">
                      <Flex py="6px" justify="space-between" align="center">
                        <Flex align="center">
                          <Avatar
                            mr="10px"
                            name={data.nickName}
                            src={data.picture ?? 'https://bit.ly/broken-link'}
                          />
                          <VStack align="flex-start">
                            <Text fontSize="14px" fontWeight="600">
                              {data.nickName}
                            </Text>
                            <Text fontSize="12px">?? Connections</Text>
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

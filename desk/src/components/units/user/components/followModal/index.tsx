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

export default function FollowModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>팔로워/팔로우에 연결 예정</Button>

      <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto" p="12px">
            팔로워
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

                {/* ============= */}
                {/* <Card w="100%" variant="elevated" px="10px">
                  <CardBody p="0px">
                    <Flex py="6px" justify="space-between" align="center">
                      <Flex align="center">
                        <Avatar
                          mr="10px"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                        <VStack align="flex-start">
                          <Text fontSize="14px" fontWeight="600">
                            Alice
                          </Text>
                          <Text fontSize="12px">45 Connections</Text>
                        </VStack>
                      </Flex>
                      <IconButton
                        variant="outline"
                        bgColor="dPrimary"
                        color="white"
                        aria-label="follow"
                        fontSize="25px"
                        icon={<MdPersonOutline />}
                      />
                    </Flex>
                  </CardBody>
                </Card>
                <Card w="100%" variant="elevated" px="10px">
                  <CardBody p="0px">
                    <Flex py="6px" justify="space-between" align="center">
                      <Flex align="center">
                        <Avatar
                          mr="10px"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                        <VStack align="flex-start">
                          <Text fontSize="14px" fontWeight="600">
                            Alice
                          </Text>
                          <Text fontSize="12px">45 Connections</Text>
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
                <Card w="100%" variant="elevated" px="10px">
                  <CardBody p="0px">
                    <Flex py="6px" justify="space-between" align="center">
                      <Flex align="center">
                        <Avatar
                          mr="10px"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                        <VStack align="flex-start">
                          <Text fontSize="14px" fontWeight="600">
                            Alice
                          </Text>
                          <Text fontSize="12px">45 Connections</Text>
                        </VStack>
                      </Flex>
                      <IconButton
                        variant="outline"
                        bgColor="dPrimary"
                        color="white"
                        aria-label="follow"
                        fontSize="25px"
                        icon={<MdPersonOutline />}
                      />
                    </Flex>
                  </CardBody>
                </Card> */}
                {/* ============= */}
              </VStack>
            </InfiniteScroller>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

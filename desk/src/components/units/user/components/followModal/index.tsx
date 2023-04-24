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
            <VStack>
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
              {/* ============= */}
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
              </Card>
              {/* ============= */}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

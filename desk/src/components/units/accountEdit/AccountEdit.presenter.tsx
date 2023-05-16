import FileUpload from '@/src/components/ui/fileUpload'
import SignoutModalButton from '@/src/components/units/accountEdit/components/signoutModalButton'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Icon,
  IconButton,
  IconButtonProps,
  Input,
  Link,
  Text,
  VStack,
  useColorModeValue,
  useEditableControls,
} from '@chakra-ui/react'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'

import { BsLink45Deg } from 'react-icons/bs'
import { AccountEditUIProps } from './AccountEdit.types'
import MyJobSelect from '../auth/signup/components/MyJobSelect'

export default function AccountEditUI(props: AccountEditUIProps) {
  return (
    <Box maxW="776px" m={'120px auto 0'} p={'0 20px 0'}>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <Flex direction="column" justify={'space-between'} gap="25px">
          <Flex>
            <Box w="40%">
              <Center w="80%">
                <FileUpload
                  type="profile"
                  width="125px"
                  height="125px"
                  fileUrl={props.myUserInfo?.picture ?? ''}
                  onChangeFile={props.onChangeFile}
                  fileUploadRef={props.fileUploadRef}
                />
              </Center>
            </Box>
            <Box w="60%" ml="55px" my={'auto'}>
              <Button
                color={useColorModeValue('#fff', '#1A202C')}
                bgColor={'dPrimary'}
                _hover={{ bg: 'dPrimaryHover.dark' }}
                onClick={props.onClickUploadButton}>
                이미지 업로드
              </Button>
            </Box>
          </Flex>
          <Divider border="1px" borderColor="dGray.medium" />
          <Flex>
            <Box w="40%">
              <Center flexDirection="column" w="80%">
                <Text mb="30px" fontSize="26px" fontWeight="700">
                  책상 주인
                </Text>
                <Badge
                  bg="dPrimary"
                  color="#fff"
                  px="6px"
                  py="3px"
                  mx="3"
                  defaultValue={props.myUserInfo?.jobGroup}
                  textTransform="uppercase"
                  alignItems="center">
                  {props.myJob || props.myUserInfo?.jobGroup}
                </Badge>
              </Center>
            </Box>
            <Box w="60%" ml="55px" mb="10px">
              <Editable
                mb="20px"
                textAlign="start"
                defaultValue={props.myUserInfo?.nickName}
                fontSize="24px"
                fontWeight="700"
                isPreviewFocusable={false}>
                <Flex
                  justify={'space-between'}
                  align="center"
                  fontSize="24px"
                  fontWeight="700">
                  <EditablePreview />
                  <Input
                    {...props.register('nickName')}
                    as={EditableInput}
                    focusBorderColor={'dPrimary'}
                  />
                  <props.EditableControls />
                </Flex>
              </Editable>
              <MyJobSelect
                setMyJob={props.setMyJob}
                myJob={props.myJob || (props.myUserInfo?.jobGroup as string)}
              />
            </Box>
          </Flex>
          <Divider border="1px" borderColor="#bababa" />
          <Flex align="center">
            <Box w="40%">
              <Center flexDirection="column" w="80%">
                <Text fontSize="20px" fontWeight="500">
                  한 줄 소개
                </Text>
              </Center>
            </Box>
            <Box w="60%" ml="55px">
              <Text fontSize="18px" fontWeight="500">
                <Editable
                  textAlign="start"
                  placeholder="한 줄 소개해 주세요. (최대 30자)"
                  defaultValue={props.myUserInfo?.intro || ''}
                  fontSize="20px"
                  fontWeight="400"
                  isPreviewFocusable={false}>
                  <Flex
                    justify={'space-between'}
                    align="center"
                    fontSize="18px"
                    fontWeight="400">
                    <EditablePreview />
                    <Input
                      {...props.register('intro')}
                      as={EditableInput}
                      focusBorderColor={'dPrimary'}
                    />
                    <props.EditableControls />
                  </Flex>
                </Editable>
              </Text>
            </Box>
          </Flex>
          <Divider border="1px" borderColor="#bababa" />
          <Flex align="cennter">
            <Box w="40%">
              <Center flexDirection="column" w="80%">
                <Text fontSize="20px" fontWeight="500">
                  email
                </Text>
              </Center>
            </Box>
            <Box w="60%" ml="55px">
              <Text fontSize="18px">{props.myUserInfo?.email}</Text>
            </Box>
          </Flex>
          <Divider border="1px" borderColor="#bababa" />
          <Flex align="center">
            <Box w="40%">
              <Center flexDirection="column" w="80%">
                <Text fontSize="20px" fontWeight="500">
                  SNS 계정
                </Text>
              </Center>
            </Box>
            <Box w="60%" ml="55px">
              {/* <Link href="https://www.example.com" isExternal> */}
              <Flex direction="column" alignItems="stretch" justifyContent="flex-start">
                {/* <Text fontSize="16px">sns 링크로 이동하기</Text> */}
                {/* SNS 계정 추가하기 */}
                <VStack align="stretch">
                  {props.myUserInfo?.snsAccounts?.map((link, index) => (
                    <Flex
                      key={link.id}
                      direction="row"
                      justifyContent="space-between"
                      align="center">
                      <Flex align="center">
                        <Icon size="16px" as={BsLink45Deg} mr={1} />
                        <Link>
                          <Input
                            color="##718096"
                            fontSize="18px"
                            // TODO: SNS register
                            {...props.register(`snsAccounts.${index}.link`)}
                            defaultValue={link.sns || ''}
                            variant="unstyled"
                            placeholder="SNS 계정 추가"
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  ))}

                  {/* <SnsLinks /> */}

                  {/* {props.snsLinks.map(link => (
                    <Flex
                      key={link.id}
                      direction="row"
                      justifyContent="space-between"
                      align="center">
                      <Flex align="center">
                        <Icon size="16px" as={BsLink45Deg} mr={1} />
                        <Link>
                          <Input
                            fontSize="18px"
                            id={`${link.id}`}
                            // {...props.register('snsAccount')}
                            variant="unstyled"
                            placeholder="SNS 계정 추가 (최대 3개)"
                            onChange={props.onChangeLink}
                          />
                        </Link>
                      </Flex>
                      {link.id === props.nextId.current ? ( // 추가 될 링크
                        props.snsLinks.length >= props.SnsLinkCount.MAX ? (
                          <Button
                            id={`${link.id}`}
                            w={'40px'}
                            h={'40px'}
                            bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                            onClick={() => props.deleteSnsLink(link.id)}>
                            <MinusIcon boxSize={3} />
                          </Button>
                        ) : (
                          <Button
                            w={'40px'}
                            h={'40px'}
                            bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                            onClick={props.addSnsLink}>
                            <AddIcon boxSize={3} />
                          </Button>
                        )
                      ) : props.snsLinks.length <= props.SnsLinkCount.MIN ? ( // 기존 링크
                        <Button
                          w={'40px'}
                          h={'40px'}
                          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                          onClick={props.addSnsLink}>
                          <AddIcon boxSize={3} />
                        </Button>
                      ) : (
                        <Button
                          id={`${link.id}`}
                          w={'40px'}
                          h={'40px'}
                          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                          onClick={() => props.deleteSnsLink(link.id)}>
                          <MinusIcon boxSize={3} />
                        </Button>
                      )}
                    </Flex>
                  ))} */}
                </VStack>
              </Flex>
            </Box>
          </Flex>
          <Divider border="1px" borderColor="#bababa" />
          <Flex align="center">
            <Box w="40%">
              <Center flexDirection="column" w="80%">
                <Text fontSize="20px" fontWeight="500">
                  회원 탈퇴
                </Text>
              </Center>
            </Box>
            <Box w="60%" ml="55px">
              <SignoutModalButton />
            </Box>
          </Flex>
        </Flex>
        <Center mt="50px">
          <Button w="300px" type="submit">
            수정 완료
          </Button>
        </Center>
      </form>
    </Box>
  )
}

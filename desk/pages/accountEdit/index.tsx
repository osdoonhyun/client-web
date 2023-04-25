import FileUpload from '@/src/components/ui/fileUpload'
import SignOutButton from '@/src/components/units/accountEdit/components'
import { AddIcon, CheckIcon, CloseIcon, EditIcon, MinusIcon } from '@chakra-ui/icons'
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
  useEditableControls,
} from '@chakra-ui/react'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'

//sns 계정 추가 타입
type ItemLinkType = {
  id: number
  link: string
}

const SNS_ACCOUNT_LINKS: ItemLinkType[] = [
  {
    id: 1,
    link: '',
  },
]

const SnsLinkCount = {
  MAX: 3,
  MIN: 1,
}

export default function AccountEdit() {
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
      useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          icon={<CheckIcon />}
          {...(getSubmitButtonProps() as IconButtonProps)}
        />
        <IconButton
          icon={<CloseIcon />}
          {...(getCancelButtonProps() as IconButtonProps)}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          size="sm"
          icon={<EditIcon />}
          {...(getEditButtonProps() as IconButtonProps)}
        />
      </Flex>
    )
  }

  const onChangeFileUrl = useCallback((fileUrl: string, index: number) => {
    console.log(fileUrl)
  }, [])
  const onChangeFile = useCallback((file: File, index: number) => {
    console.log(file)
  }, [])

  // sns 계정 추가하기
  const nextId = useRef(SnsLinkCount.MIN)
  const [snsLinks, setSnsLinks] = useState<ItemLinkType[]>(SNS_ACCOUNT_LINKS)

  const addSnsLink = () => {
    if (SnsLinkCount.MAX <= snsLinks.length) {
      return
    }

    nextId.current += 1
    setSnsLinks(prev => [...prev, { id: nextId.current, link: '' }])
  }

  const deleteSnsLink = (id: number) => () => {
    setSnsLinks(links => links.filter(link => link.id !== id))
  }

  const onChangeLink = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setSnsLinks(links =>
      links.map(link => (link.id === Number(id) ? { ...link, link: value } : link)),
    )
  }

  // 프로필 이미지 버튼
  const fileUploadRef = useRef<HTMLInputElement>(null)

  const onClickUploadButton = () => {
    fileUploadRef.current?.click()
  }

  return (
    <Box maxW="776px" m={'120px auto 0'} p={'0 20px 0'}>
      <Flex direction="column" justify={'space-between'} gap="25px">
        <Flex>
          <Box w="40%">
            <Center w="80%">
              <FileUpload
                type="profile"
                width="125px"
                height="125px"
                fileUrl=""
                onChangeFile={onChangeFile}
                onChangeFileUrl={onChangeFileUrl}
                fileUploadRef={fileUploadRef}
              />
            </Center>
          </Box>
          <Box w="60%" ml="55px" my={'auto'}>
            <Button onClick={onClickUploadButton}>이미지 업로드</Button>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="26px" fontWeight="700">
                책상 주인
              </Text>
              <Badge>IT</Badge>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <Editable
              textAlign="start"
              defaultValue="Rasengan ⚡️"
              fontSize="26px"
              fontWeight="700"
              isPreviewFocusable={false}>
              <Flex justify={'space-between'} fontSize="26px" fontWeight="700">
                <EditablePreview />
                <Input as={EditableInput} />
                <EditableControls />
              </Flex>
            </Editable>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="20px" fontWeight="500">
                한 줄 소개
              </Text>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <Text fontSize="20px" fontWeight="500">
              <Editable
                textAlign="start"
                defaultValue="Rasengan ⚡️"
                fontSize="20px"
                fontWeight="500"
                isPreviewFocusable={false}>
                <Flex justify={'space-between'} fontSize="20px" fontWeight="500">
                  <EditablePreview />

                  <Input as={EditableInput} />
                  <EditableControls />
                </Flex>
              </Editable>
            </Text>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="18px">email</Text>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <Text fontSize="18px">abc@google.com</Text>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text alignContent="center" fontSize="18px">
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
                {snsLinks.map(link => (
                  <Flex
                    key={link.id}
                    direction="row"
                    justifyContent="space-between"
                    align="center">
                    <Flex align="center">
                      <Icon size="16px" as={BsLink45Deg} mr={1} />
                      <Link>
                        <Input
                          id={`${link.id}`}
                          variant="unstyled"
                          placeholder="SNS 계정 추가 (최대 3개)"
                          onChange={onChangeLink}
                        />
                      </Link>
                    </Flex>
                    {link.id === nextId.current ? ( // 추가 될 링크
                      snsLinks.length >= SnsLinkCount.MAX ? (
                        <Button
                          id={`${link.id}`}
                          w={'40px'}
                          h={'40px'}
                          backgroundColor={'clear'}
                          bgColor={'dGray.light'}
                          onClick={deleteSnsLink(link.id)}>
                          <MinusIcon boxSize={3} />
                        </Button>
                      ) : (
                        <Button
                          w={'40px'}
                          h={'40px'}
                          bgColor={'dGray.light'}
                          onClick={addSnsLink}>
                          <AddIcon boxSize={3} />
                        </Button>
                      )
                    ) : snsLinks.length <= SnsLinkCount.MIN ? ( // 기존 링크
                      <Button
                        w={'40px'}
                        h={'40px'}
                        bgColor={'dGray.light'}
                        onClick={addSnsLink}>
                        <AddIcon boxSize={3} />
                      </Button>
                    ) : (
                      <Button
                        id={`${link.id}`}
                        w={'40px'}
                        h={'40px'}
                        backgroundColor={'clear'}
                        bgColor={'dGray.light'}
                        onClick={deleteSnsLink(link.id)}>
                        <MinusIcon boxSize={3} />
                      </Button>
                    )}
                  </Flex>
                ))}
              </VStack>
            </Flex>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="18px">회원 탈퇴</Text>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <SignOutButton />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import { AccountEditUIProps } from './AccountEdit.types'
import MyJobSelect from '../auth/signup/components/MyJobSelect'
import SnsAccountEdit from './components/snsAccountEdit'
import FileUpload from '@/src/components/ui/fileUpload'
import SignoutModalButton from '@/src/components/units/accountEdit/components/signoutModalButton'

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
                onEdit={props.onChangeInputEdited}
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
                    onBlur={e =>
                      props.onChangeInputNotEdited(e, props.myUserInfo?.nickName)
                    }
                    onKeyDown={props.onChangeKeyDown}
                    focusBorderColor={'dPrimary'}
                  />
                  <props.EditableControls />
                </Flex>
              </Editable>
              <MyJobSelect
                setMyJob={props.setMyJob}
                onChangeInputNotEdited={props.onChangeInputNotEdited}
                myJob={props.myJob || (props.myUserInfo?.jobGroup as string)}
                onChangeInputEdited={props.onChangeInputEdited}
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
                  onEdit={props.onChangeInputEdited}
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
                      onBlur={e =>
                        props.onChangeInputNotEdited(e, props.myUserInfo?.intro)
                      }
                      onKeyDown={props.onChangeKeyDown}
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
              <SnsAccountEdit
                onChangeInputNotEdited={props.onChangeInputNotEdited}
                onChangeInputEdited={props.onChangeInputEdited}
                snsAccounts={props.myUserInfo?.snsAccounts || []}
                onChangeKeyDown={props.onChangeKeyDown}
                register={props.register}
              />
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
          <Button
            w="300px"
            color={props.isEdited ? '#fff' : '#232323'}
            backgroundColor={props.isEdited ? 'dPrimary' : ''}
            // _hover={{ bg: 'dPrimaryHover.dark' }}
            _hover={
              props.isEdited ? { bg: 'dPrimaryHover.dark' } : { bg: 'dGray.medium' }
            }
            type="submit">
            수정 완료
          </Button>
        </Center>
      </form>
    </Box>
  )
}

import { useEffect } from 'react'
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { TbMail } from 'react-icons/tb'
import { LayoutHeaderUIProps } from './LayoutHeader.types'
import { useAuth } from '@/src/commons/hooks/useAuth'
import { useRecoilState } from 'recoil'
import { MyLastLogined } from '@/src/commons/store/atom'
import Logo from '@/src/components/ui/logo'
import SearchBoards from '@/src/components/units/main/components/searchBoards/SearchBoards.container'

export default function LayoutHeaderUI(props: LayoutHeaderUIProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [myLastLogined, setMyLastLogined] = useRecoilState(MyLastLogined)
  const {
    isLoggedIn,
    myUserInfo,
    LoginModalUI,
    SignupModalUI,
    fetchUserInfo,
    openModal,
    logout,
  } = useAuth()

  useEffect(() => {
    void fetchUserInfo()
  }, [])

  return (
    <>
      <Box bg={useColorModeValue('dGray.light', 'gray.900')} px={4} position={'relative'}>
        <Flex h={16} pt={2} alignItems={'center'} justifyContent={'space-between'}>
          <Logo />
          <Flex alignItems={'center'} zIndex={999}>
            <Stack direction={'row'} spacing={4}>
              <SearchBoards />
              <Button onClick={toggleColorMode} size={{ base: 'sm', sm: 'md' }}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    mr={2}
                    name={myUserInfo?.nickName}
                    size={'sm'}
                    bgColor={'gray.400'}
                    src={
                      isLoggedIn && myUserInfo?.picture
                        ? myUserInfo.picture
                        : 'https://bit.ly/broken-link'
                    }
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <Center mt={'30px'}>
                    <Avatar
                      bgColor={'gray.400'}
                      size={'xl'}
                      name={myUserInfo?.nickName}
                      src={
                        isLoggedIn && myUserInfo?.picture
                          ? myUserInfo.picture
                          : 'https://bit.ly/broken-link'
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    {!isLoggedIn && <p>닉네임</p>}
                    {isLoggedIn && (
                      <div>
                        <Center mb={2} fontSize={'mb'} fontWeight="600">
                          {myUserInfo?.nickName}
                        </Center>
                        <Flex
                          mb={2}
                          alignItems={'center'}
                          justifyContent={'center'}
                          color={useColorModeValue('dGray.dark', 'dGray.light')}>
                          <TbMail />
                          <Center ml={1} fontSize={'11pt'}>
                            {myUserInfo?.email}
                          </Center>
                        </Flex>
                        <Flex
                          justifyContent="space-around"
                          color={useColorModeValue('#232323d5', 'dGray.light')}>
                          <Center mx={2}>
                            팔로우
                            <Box ml={1} fontWeight="700">
                              {myUserInfo?.followeesCount}
                            </Box>
                          </Center>
                          <Center mx={2}>
                            팔로잉
                            <Box ml={1} fontWeight="700">
                              {myUserInfo?.followingsCount}
                            </Box>
                          </Center>
                        </Flex>
                      </div>
                    )}
                  </Center>
                  <br />
                  <MenuDivider />
                  {!isLoggedIn ? (
                    <>
                      <MenuItem
                        pl={10}
                        textAlign="center"
                        onClick={() => openModal('LOGIN')}>
                        로그인
                      </MenuItem>
                      <MenuItem pl={10} onClick={() => openModal('SIGNUP')}>
                        회원가입
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem
                        pl={10}
                        onClick={props.onClickMoveToUser(myUserInfo?.id ?? '')}>
                        마이페이지
                      </MenuItem>
                      <MenuItem pl={10} onClick={logout}>
                        로그아웃
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <LoginModalUI />
      <SignupModalUI />
    </>
  )
}

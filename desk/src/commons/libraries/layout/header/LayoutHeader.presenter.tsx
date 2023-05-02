import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { LayoutHeaderUIProps } from './LayoutHeader.types'
import { useAuth } from '@/src/commons/hooks/useAuth'
import Logo from '@/src/components/ui/logo'
import SearchBoards from '@/src/components/units/main/components/searchBoards/SearchBoards.container'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
)

export default function LayoutHeaderUI(props: LayoutHeaderUIProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const {
    isLoggedIn,
    myUserInfo,
    LoginModalUI,
    SignupModalUI,
    openModal,
    logout,
    signout,
  } = useAuth()

  return (
    <>
      <Box bg={useColorModeValue('dGray.light', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              <SearchBoards />
              <Button onClick={toggleColorMode}>
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
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    {!isLoggedIn && <p>닉네임</p>}
                    {isLoggedIn && <p>{myUserInfo?.nickName}</p>}
                  </Center>
                  <br />
                  <MenuDivider />
                  {!isLoggedIn ? (
                    <>
                      <MenuItem onClick={() => openModal('LOGIN')}>로그인</MenuItem>
                      <MenuItem onClick={() => openModal('SIGNUP')}>회원가입</MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem onClick={props.onClickMoveToUser(myUserInfo?.id ?? '')}>
                        마이페이지
                      </MenuItem>
                      <MenuItem onClick={logout}>로그아웃</MenuItem>
                      <MenuItem onClick={signout}>회원탈퇴</MenuItem>
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

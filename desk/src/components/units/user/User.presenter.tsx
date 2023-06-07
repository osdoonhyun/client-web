import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { GoPencil } from 'react-icons/go'
import { UserUIProps } from './User.types'
import NavigationTab from './components/tabs'
import FollowModal from './components/followModal'
import SnsAccount from './components/snsAccount'
import UserBadge from '../../ui/userBadge'

export default function UserUI(props: UserUIProps) {
  return (
    <Box
      h="85vh"
      overflow="auto"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}>
      <Box mx="auto" maxW="810px" minW="434px" px="10px">
        <Flex mt="100px" justify="space-between">
          <Flex direction="column" pos="relative">
            <Flex ml="15px" justify="space-between" align="center">
              <Text
                fontSize={{ base: 'md', md: '2xl' }}
                fontWeight="700"
                alignContent="center">
                책상주인 : {props.userData.user.nickName}
                <UserBadge job={props.userData.user.jobGroup} />
              </Text>
            </Flex>
            <Flex ml={{ base: '40px', md: '50px' }} mt="25px" gap="25px">
              <FollowModal
                type="followee"
                userData={props.userData}
                isLoggedIn={props.isLoggedIn}
                followeesData={props.followeesData}
                followingsData={props.followingsData}
              />
              <FollowModal
                type="following"
                userData={props.userData}
                isLoggedIn={props.isLoggedIn}
                followeesData={props.followeesData}
                followingsData={props.followingsData}
              />
            </Flex>
            <Flex direction="column" mt="26px" ml={{ base: '40px', md: '50px' }}>
              <Text
                mb="23px"
                fontSize={{ base: 'sm', md: 'md', lg: '16px' }}
                alignItems="center"
                fontWeight="600">
                {props.userData.user.intro}
              </Text>
              <SnsAccount snsAccounts={props.userData?.user.snsAccounts || []} />
            </Flex>
          </Flex>
          <Flex
            mr={{ base: '15px', md: '34px' }}
            direction="column"
            justify="center"
            align="center">
            <Avatar
              borderRadius="full"
              objectFit="cover"
              boxSize={{ base: '115px', md: '170px' }}
              name={props.userData.user.nickName}
              src={props.userData.user.picture ?? 'https://bit.ly/broken-link'}
            />
            {props.isMyPage ? (
              <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="dPrimary"
                borderColor="dPrimary"
                _hover={useColorModeValue(
                  { bg: 'dPrimaryHover.dark', color: 'dGray.light' },
                  { bg: 'dPrimaryHover.dark', color: '#1A202C' },
                )}
                variant="outline"
                my="25px"
                w={{ base: '100px', md: '140px' }}
                h={{ base: '20px', md: '28px' }}
                fontSize={{ base: '11px', md: '16px' }}
                fontWeight="600"
                onClick={props.onClickMoveToAccountEdit}>
                <Box display="flex" textAlign="center">
                  <span style={{ padding: '0 2px' }}>
                    <GoPencil color="dPrimary" />
                  </span>
                  프로필 수정하기
                </Box>
              </Button>
            ) : (
              <Button
                mt="28px"
                w={{ base: '108px', md: '126px' }}
                h={{ base: '40px', md: '48px' }}
                fontSize={{ base: '16px', md: '18px' }}
                color={
                  props.isFollowing
                    ? 'dGray.medium'
                    : useColorModeValue('#fff', '#1A202C')
                }
                bgColor={props.isFollowing ? undefined : 'dPrimary'}
                borderColor={props.isFollowing ? 'dGray.medium' : 'dPrimary'}
                _hover={
                  props.isFollowing
                    ? useColorModeValue({ bg: 'dGray.light' }, { bg: 'dGray.dark' })
                    : { bg: 'dPrimaryHover.dark' }
                }
                onClick={props.onClickFollowingButton}
                fontWeight="600">
                {props.isFollowing ? '팔로잉' : '팔로우'}
              </Button>
            )}
          </Flex>
        </Flex>
        <NavigationTab isMyPage={props.isMyPage} userid={props.userData.user.id} />
      </Box>
    </Box>
  )
}

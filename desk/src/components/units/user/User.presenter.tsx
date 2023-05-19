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
      <Box mx="auto" maxW="900px" w="810px">
        <Flex mt="100px" justify="space-between">
          <Flex direction="column" pos="relative">
            <Flex ml="15px" justify="space-between" align="center">
              <Text fontSize="24px" fontWeight="700" alignContent="center">
                책상주인 : {props.userData.user.nickName}
                <Badge
                  bg="dPrimary"
                  color="#fff"
                  px="6px"
                  py="3px"
                  mx="3"
                  textTransform="uppercase"
                  alignItems="center">
                  {props.userData.user.jobGroup}
                </Badge>
              </Text>
            </Flex>
            <Flex ml="50px" mt="25px" gap="25px">
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
            <Flex direction="column" mt="26px" ml="50px">
              <Text mb="23px" fontSize="16px" alignItems="center" fontWeight="600">
                {props.userData.user.intro}
              </Text>
              <SnsAccount snsAccounts={props.userData?.user.snsAccounts || []} />
            </Flex>
          </Flex>
          <Flex mr="34px" direction="column" justify="center" align="center">
            <Avatar
              borderRadius="full"
              objectFit="cover"
              background="dGray.medium"
              boxSize="170px"
              name={props.userData.user.nickName}
              src={props.userData.user.picture ?? 'https://bit.ly/broken-link'}
            />
            {props.isMyPage ? (
              <Button
                alignItems="center"
                textAlign="center"
                color="dPrimary"
                borderColor="dPrimary"
                _hover={useColorModeValue(
                  { bg: 'dPrimaryHover.dark', color: 'dGray.light' },
                  { bg: 'dPrimaryHover.dark', color: '#1A202C' },
                )}
                variant="outline"
                my="25px"
                w="140px"
                h="32px"
                fontSize="16px"
                fontWeight="600"
                onClick={props.onClickMoveToAccountEdit}>
                <span style={{ padding: '0 2px' }}>
                  <GoPencil color="dPrimary" />
                </span>
                프로필 수정하기
              </Button>
            ) : (
              <Button
                mt="28px"
                w="126px"
                h="48px"
                fontSize="18px"
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

import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { GoPencil } from 'react-icons/go'
import { BsLink45Deg } from 'react-icons/bs'
import { UserUIProps } from './User.types'
import NavigationTab from './components/tabs'
import ProductItem from './components/productItem'
import FollowModal from './components/followModal'
import { TSnsAccount } from '@/src/commons/types/generated/types'

export default function UserUI(props: UserUIProps) {
  console.log('USERUI 팔로잉', props.isFollowing)
  return (
    <Box
      h="900px"
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

              {props.userData.user.snsAccounts?.map((snsAccount: TSnsAccount) => (
                <Link
                  key={snsAccount.id}
                  href={snsAccount.sns}
                  isExternal
                  color={useColorModeValue('#1e5d97', '#c1daf2')}
                  fontWeight="600">
                  <Flex alignItems="center" justifyContent="flex-start">
                    <Icon as={BsLink45Deg} mr={1} />
                    <Text>{snsAccount.sns}</Text>
                  </Flex>
                </Link>
              ))}

              {/* <Link
                href="https://www.example.com"
                isExternal
                color={useColorModeValue('#1e5d97', '#c1daf2')}
                fontWeight="600">
                <Flex
                  flexDirection={'column'}
                  alignItems="center"
                  justifyContent="flex-start">
                  <Flex>
                    <Icon as={BsLink45Deg} mr={1} />
                    <Text>sns 링크로 이동하기</Text>
                  </Flex>
                  <Text>sns 링크로 이동하기</Text>
                  <Text>sns 링크로 이동하기</Text>
                </Flex>
              </Link> */}
            </Flex>
          </Flex>
          <Flex mr="34px" direction="column" justify="center" align="center">
            <Avatar
              borderRadius="full"
              objectFit="cover"
              background="dGray.medium"
              boxSize="170px"
              src={props.userData.user.picture ?? 'https://bit.ly/broken-link'}
            />
            {props.isMyPage ? ( // 나의 페이지면 프로필 수정하기 버튼 / 아니면 팔로우 버튼
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
                {/* 자신의 페이지일 경우만 보이도록 */}
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
        {/* 게시글, 팔로우, 팔로워 분리 예정 */}
        {/* TODO:props drilling 최적화 예정 */}
        <NavigationTab isMyPage={props.isMyPage} userid={props.userData.user.id} />
      </Box>
    </Box>
  )
}

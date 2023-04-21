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
} from '@chakra-ui/react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { GoPencil } from 'react-icons/go'
import { BsLink45Deg } from 'react-icons/bs'
import { UserUIProps } from './User.types'
import NavigationTab from './components/tabs'
import ProductItem from './components/productItem'

export default function UserUI(props: UserUIProps) {
  return (
    <Box h="900px">
      <Box mx="auto" maxW="900px" w="810px" h="900px">
        <Flex mt="100px" justify="space-between">
          <Flex direction="column" pos="relative">
            <Flex ml="15px" justify="space-between" align="center">
              <Text fontSize="24px" fontWeight="700" alignContent="center">
                책상주인 : 닉네임
                <Badge mx="3" textTransform="uppercase" alignItems="center">
                  IT
                </Badge>
              </Text>
              <Button
                alignItems="center"
                textAlign="center"
                color="dPrimary"
                borderColor="dPrimary"
                variant="outline"
                w="108px"
                h="16px"
                ml="25px"
                py="11px"
                fontSize="12px"
                fontWeight="600">
                <span style={{ padding: '0 2px' }}>
                  <GoPencil color="dPrimary" />
                </span>
                프로필 수정하기
              </Button>
            </Flex>
            <Flex direction="column" mt="23px" ml="50px">
              <Text mb="23px" fontSize="16px" alignItems="center" fontWeight="600">
                한 줄 소개 :{' '}
              </Text>

              <Link href="https://www.example.com" isExternal>
                <Flex alignItems="center" justifyContent="flex-start">
                  <Icon as={BsLink45Deg} mr={1} />
                  <Text>sns 링크로 이동하기</Text>
                </Flex>
              </Link>
              <Link href="https://www.example.com" isExternal>
                <Flex alignItems="center" justifyContent="flex-start">
                  <Icon as={BsLink45Deg} mr={1} />
                  <Text>https://naver.com</Text>
                </Flex>
              </Link>
            </Flex>

            <Flex position="absolute" bottom="20px" ml="50px" gap="25px">
              <Button>팔로워 36</Button>
              <Button>팔로우 136</Button>
            </Flex>
          </Flex>
          <Flex mr="34px" direction="column" justify="center" align="center">
            <Avatar
              borderRadius="full"
              objectFit="cover"
              background="gray.300"
              boxSize="170px"
              src=""
            />
            <Button
              mt="28px"
              w="126px"
              h="48px"
              bg="dPrimary"
              color="white"
              fontSize="18px"
              fontWeight="600">
              팔로우
            </Button>
          </Flex>
        </Flex>

        {/* 게시글, 팔로우, 팔로워 분리 예정 */}
        {/* TODO:props drilling 최적화 예정 */}
        <NavigationTab
          isMyPage={props.isMyPage}
          showUserPosts={props.showUserPosts}
          showUserProductPosts={props.showUserProductPosts}
          showLikedPosts={props.showLikedPosts}
          isLiked={props.isLiked}
          toggleIsLiked={props.toggleIsLiked}
          onClickShowUserPosts={props.onClickShowUserPosts}
          onClickShowUserProductPosts={props.onClickShowUserProductPosts}
          onClickShowLikedPosts={props.onClickShowLikedPosts}
          onClickTab={props.onClickTab}
        />

        {/* <SimpleGrid mt="33px" columns={3} spacing="30px">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem /> */}
        {/* <Box pos="relative">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              bg="dGray"
              borderRadius="10px"
            />
            <Box
              pos="absolute"
              zIndex="2"
              top="88%"
              left="88%"
              _hover={
                props.isLiked
                  ? undefined
                  : {
                      color: 'dGray.medium',
                    }
              }
              color={props.isLiked ? 'dRed.400' : '#fff'}
              onClick={props.toggleIsLiked}>
              {props.isLiked ? (
                <MdFavorite size="20px" />
              ) : (
                <MdFavoriteBorder size="20px" />
              )}
            </Box>
          </Box>
          <Box pos="relative">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              bg="dGray"
              borderRadius="10px"
            />
            <Box
              pos="absolute"
              zIndex="2"
              top="88%"
              left="88%"
              _hover={
                props.isLiked
                  ? undefined
                  : {
                      color: 'dGray.medium',
                    }
              }
              color={props.isLiked ? 'dRed.400' : '#fff'}
              onClick={props.toggleIsLiked}>
              {props.isLiked ? (
                <MdFavorite size="20px" />
              ) : (
                <MdFavoriteBorder size="20px" />
              )}
            </Box>
          </Box> */}
        {/* </SimpleGrid> */}
      </Box>
    </Box>
  )
}

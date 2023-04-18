import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
  Tabs,
  TabList,
  Tab,
  useBoolean,
  Icon,
} from '@chakra-ui/react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { GoPencil } from 'react-icons/go'
import { BsLink45Deg, BsColumnsGap } from 'react-icons/bs'
import { GiLaptop } from 'react-icons/gi'
import { UserUIProps } from './User.types'

export default function UserUI(props: UserUIProps) {
  return (
    <Box h="900px">
      <Box mx="auto" maxW="900px" w="810px" h="900px">
        <Flex mt="100px" justify="space-between">
          <Flex direction="column">
            <Flex mt="auto" ml="15px" justify="space-between" align="center">
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
            <Tabs mt="auto" colorScheme="purple">
              {/* colorScheme 속성에 dPrimary가 적용 안됨 */}
              <TabList>
                <Tab w="160px" h="28px" py="25px" fontSize="18px" fontWeight="700">
                  게시물
                </Tab>
                <Tab w="160px" h="28px" py="25px" fontSize="18px" fontWeight="700">
                  팔로워
                </Tab>
                <Tab w="160px" h="28px" py="25px" fontSize="18px" fontWeight="700">
                  팔로우
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
          <Flex mr="34px" direction="column" justify="center" align="center">
            <Image
              borderRadius="full"
              objectFit="cover"
              background="gray.300"
              boxSize="170px"
              src=""
            />
            {/* <Avatar name="" size="170px" src="" />  아바타로 할지 이미지로 할지 추후 결정 */}
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
        <Flex mt="39px" h="50px">
          <Center
            width="50%"
            color={props.showUserPosts ? 'dGray.dark' : 'dGray.medium'}
            bg={props.showUserPosts ? 'dGray.medium' : 'dGray.light'}>
            {/* TODO:게시글 버튼 뭐가 나을까요? */}
            <GiLaptop size="45%" onClick={props.onClickShowUserPosts} />{' '}
            <BsColumnsGap size="45%" />
          </Center>
          <Center
            width="50%"
            color={props.showLikedPosts ? 'dGray.dark' : 'dGray.medium'}
            bg={props.showLikedPosts ? 'dGray.medium' : 'dGray.light'}>
            <MdFavoriteBorder onClick={props.onClickShowLikedPosts} size="45%" />
          </Center>
        </Flex>

        <SimpleGrid mt="33px" columns={3} spacing="30px">
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
              onClick={props.setIsLiked.toggle}>
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
              onClick={props.setIsLiked.toggle}>
              {props.isLiked ? (
                <MdFavorite size="20px" />
              ) : (
                <MdFavoriteBorder size="20px" />
              )}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

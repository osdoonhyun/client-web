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
} from '@chakra-ui/react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export default function UserUI() {
  const [like, setLike] = useBoolean()

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
                w="105px"
                h="16px"
                ml="25px"
                py="11px"
                fontSize="12px"
                fontWeight="600">
                프로필 수정하기
              </Button>
            </Flex>
            <Flex direction="column" mt="23px" ml="50px">
              <Text mb="23px" fontSize="16px" alignItems="center" fontWeight="600">
                한 줄 소개 :{' '}
              </Text>
              <Link href="https://chakra-ui.com" isExternal>
                링크 아이콘 sns link
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
          <Center width="50%" bg="dGray.medium">
            게시글
          </Center>
          <Center width="50%" bg="dGray.light">
            좋아요
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
                like
                  ? undefined
                  : {
                      color: 'dGray.medium',
                    }
              }
              color={like ? 'dRed.400' : '#fff'}
              onClick={setLike.toggle}>
              {like ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
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
                like
                  ? undefined
                  : {
                      color: 'dGray.medium',
                    }
              }
              color={like ? 'dRed.400' : '#fff'}
              onClick={setLike.toggle}>
              {like ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
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
                like
                  ? undefined
                  : {
                      color: 'dGray.medium',
                    }
              }
              color={like ? 'dRed.400' : '#fff'}
              onClick={setLike.toggle}>
              {like ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
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
                like
                  ? undefined
                  : {
                      color: 'dGray.medium',
                    }
              }
              color={like ? 'dRed.400' : '#fff'}
              onClick={setLike.toggle}>
              {like ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { RecentMoreUIProps } from './RecentMore.types'
import MainImageStyle from '@/src/components/units/main/components/mainImageStyle'
import InfiniteScroll from 'react-infinite-scroller'

export default function RecentMoreUI(props: RecentMoreUIProps) {
  const ml = useBreakpointValue({
    base: '30px',
    md: '25px',
  })

  return (
    <>
      <Container
        maxW="1170px"
        h="900px"
        mt="50px"
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}>
        <Text
          ml={ml}
          mb={4}
          textAlign="left"
          fontWeight="700"
          fontSize={{ base: 'lg', md: 'xl' }}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          ⏱️ 최근 게시물
        </Text>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}>
          <Flex flexWrap="wrap" justifyContent="center" m={2}>
            {props.boards.map((board, index) => (
              <Box
                key={index}
                m="15px"
                textAlign="center"
                maxW={{ base: '40%', md: '25%' }}
                color={useColorModeValue('dGray.dark', 'dGray.light')}>
                <Box onClick={() => props.onClickBoardDetail(board.id)} cursor="pointer">
                  <MainImageStyle
                    src={board.pictures.find(picture => picture.isMain)?.url ?? ''}
                    alt={`test image${index}`}
                    boardId={board.id}
                    isLiked={board.like}
                    isLikedArray={props.isLikedArray}
                  />
                </Box>
                <Center>
                  <Text
                    mt={2}
                    w="235px"
                    noOfLines={2}
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="bold"
                    cursor="pointer"
                    onClick={() => props.onClickBoardDetail(board.id)}>
                    {board.title.substring(0, 35)}
                    {board.title.length > 35 ? '...' : ''}
                  </Text>
                </Center>
                <Center>
                  <Text
                    fontSize="11pt"
                    mt={2}
                    cursor="pointer"
                    onClick={() => props.onClickUserDetail(board.writer.id)}>
                    <Avatar
                      w="20px"
                      h="20px"
                      mr="5px"
                      src={board.writer.picture || 'https://bit.ly/broken-link'}
                    />
                    {board.writer.nickName}
                  </Text>
                </Center>
                <Text
                  fontSize={{ base: 'xs', md: 'sm' }}
                  color={useColorModeValue('#757575', 'dGray.light')}
                  mt={1}>
                  {`조회수: ${board.views}`}
                </Text>
              </Box>
            ))}
          </Flex>
        </InfiniteScroll>
      </Container>
    </>
  )
}

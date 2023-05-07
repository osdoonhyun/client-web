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
  const categoryTitleFontSize = useBreakpointValue({
    base: '15pt',
    md: '18pt',
  })

  const ml = useBreakpointValue({
    base: 0,
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
          fontSize={categoryTitleFontSize}
          textAlign={['center', 'left']}
          fontWeight="700"
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
                m={'15px'}
                maxW={{ base: '100%', md: '25%' }}
                textAlign="center">
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
                    w="235px"
                    noOfLines={2}
                    fontSize="13pt"
                    fontWeight="bold"
                    mt={2}
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
                <Text fontSize="sm" mt={1} color="dGray.dark">
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

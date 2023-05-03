import {
  Avatar,
  Box,
  Container,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { FollowingBoardsMoreUIProps } from './FollowingBoardsMore.types'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import InfiniteScroll from 'react-infinite-scroller'

export default function FollowingBoardsMoreUI(props: FollowingBoardsMoreUIProps) {
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
        maxW="1200px"
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
          🧐 팔로우 한 유저들의 책상 구경하기
        </Text>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}>
          <Flex flexWrap="wrap" justifyContent="center" m={2}>
            {props.boards.map((board, index) => (
              <Box cursor="pointer" key={index} m={'15px'} p={1} textAlign="center">
                <Box onClick={() => props.onClickBoardDetail(board.id)}>
                  {board.pictures.map(picture => {
                    if (picture.isMain) {
                      return (
                        <MainImageStyle
                          key={picture.id}
                          src={picture.url}
                          alt={`board image ${board.id}`}
                        />
                      )
                    }
                  })}
                </Box>
                <Text
                  w="245px"
                  noOfLines={2}
                  fontSize="13pt"
                  fontWeight="bold"
                  mt={2}
                  cursor="pointer"
                  onClick={() => props.onClickBoardDetail(board.id)}>
                  {board.title.substring(0, 35)}
                  {board.title.length > 35 ? '...' : ''}
                </Text>
                <Flex
                  onClick={() => props.onClickUserDetail(board.user.id)}
                  alignItems="center"
                  justifyContent="center"
                  mt={1}>
                  <Avatar
                    w="20px"
                    h="20px"
                    mr="5px"
                    src={board.user.picture || 'https://bit.ly/broken-link'}
                  />
                  {board.user.nickName}
                </Flex>
              </Box>
            ))}
          </Flex>
        </InfiniteScroll>
      </Container>
    </>
  )
}

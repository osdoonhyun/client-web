import { Avatar, Box, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { FollowingBoardsMoreUIProps } from './FollowingBoardsMore.types'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import InfiniteScroll from 'react-infinite-scroller'

export default function FollowingBoardsMoreUI(props: FollowingBoardsMoreUIProps) {
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
          ml="40px"
          fontSize="18pt"
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
              <Box key={index} m={'15px'} p={1} textAlign="center">
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
                <Text fontWeight="bold" mt={2}>
                  {board.title}
                </Text>
                <Flex alignItems="center" justifyContent="center" mt={1}>
                  <Avatar
                    w="20px"
                    h="20px"
                    mr="5px"
                    // src={board.user.picture}
                    // alt={board.user.nickName}
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

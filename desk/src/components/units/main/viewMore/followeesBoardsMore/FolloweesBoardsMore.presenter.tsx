import { Center, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { FolloweesBoardsMoreUIProps } from './FolloweesBoardsMore.types'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import InfiniteScroll from 'react-infinite-scroller'

export default function FolloweesBoardsMoreUI(props: FolloweesBoardsMoreUIProps) {
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
          팔로우 하고 있는 유저들의 책상 둘러보기
        </Text>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}>
          <Flex flexWrap="wrap" justifyContent="center" m={2}>
            {Array.from({ length: 100 }).map((_, index) => (
              <Center key={index} m={'15px'}>
                <MainImageStyle src={`/test1.jpeg`} alt={`test image1`} />
              </Center>
            ))}
          </Flex>
        </InfiniteScroll>
      </Container>
    </>
  )
}

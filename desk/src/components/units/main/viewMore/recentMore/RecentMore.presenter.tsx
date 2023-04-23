import { Center, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import InfiniteScroll from 'react-infinite-scroller'

export default function RecentMoreUI(props: RecentMoreUIProps) {
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
          ml="55px"
          fontSize="18pt"
          fontWeight="700"
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          최근 게시물
        </Text>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}>
          <Flex flexWrap="wrap" justifyContent="center" m={2}>
            {Array.from({ length: 100 }).map((_, index) => (
              <Center key={index} m={'10px'}>
                <MainImageStyle src={`/test1.jpeg`} alt={`test image1`} />
              </Center>
            ))}
          </Flex>
        </InfiniteScroll>
      </Container>
    </>
  )
}

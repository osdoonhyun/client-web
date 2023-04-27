import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { RecentMoreUIProps } from './RecentMore.types'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import InfiniteScroll from 'react-infinite-scroller'

export default function RecentMoreUI(props: RecentMoreUIProps) {
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
          ml="30px"
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
            {props.boards.map((board, index) => (
              <Box
                key={index}
                m={'15px'}
                maxW={{ base: '100%', md: '25%' }}
                textAlign="center">
                <MainImageStyle
                  src={board.pictures.find(picture => picture.isMain)?.url ?? ''}
                  alt={`test image${index}`}
                />
                <Text fontSize="13pt" fontWeight="bold" mt={2}>
                  {board.title}
                </Text>
                <Center>
                  <Text fontSize="11pt" mt={2}>
                    <Avatar
                      // size={'xs'}
                      w="20px"
                      h="20px"
                      mr="5px"
                    />
                    {board.writer.nickName}
                  </Text>
                </Center>
                {board.hashtags && (
                  <Text fontSize="sm" mt={2}>
                    {board.hashtags.map(hashtag => `#${hashtag.hashtag}`).join(' ')}
                  </Text>
                )}
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

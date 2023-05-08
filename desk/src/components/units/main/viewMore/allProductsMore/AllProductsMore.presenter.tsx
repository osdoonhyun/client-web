import { Box, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { AllProductsMoreUIProps } from './AllProductsMore.types'
import InfiniteScroll from 'react-infinite-scroller'
import MainProductItems from '../../components/mainProductItems'

export default function AllProductsMoreUI(props: AllProductsMoreUIProps) {
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
          ml={'30px'}
          mb={4}
          fontSize={{ base: 'lg', md: 'xl' }}
          textAlign="left"
          fontWeight="700"
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          💻 전체 장비 모아보기
        </Text>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}>
          <Flex flexWrap="wrap" justifyContent="center" m={2}>
            {props.allProducts.map((product, index) => (
              <Box key={index} m="10px" textAlign="center">
                <MainProductItems
                  title={product.name ?? ''}
                  image={product.picture ?? ''}
                />
              </Box>
            ))}
          </Flex>
        </InfiniteScroll>
      </Container>
    </>
  )
}

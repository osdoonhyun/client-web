import { Box, Center, Flex, useMediaQuery } from '@chakra-ui/react'
import { AllProductsUIProps } from './AllProducts.types'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainProductItems from '../../components/mainProductItems'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function AllProductsUI(props: AllProductsUIProps) {
  const [isMobile] = useMediaQuery('(max-width: 992px)')

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4.1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <>
      <CategoryHeader
        categoryTitle={props.categoryTitle}
        moreButtonHidden={true}
        moreButtonLink="/allProductsMore"
      />
      <Center>
        <Box width={{ base: '100%', md: '100%', lg: '1090px' }}>
          {isMobile ? (
            <Flex
              direction="row"
              overflowX="auto"
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
              }}>
              {props.allProducts.map((product, index) => (
                <Box key={index} textAlign="center">
                  <MainProductItems
                    title={product.name ?? ''}
                    image={product.picture ?? ''}
                  />
                </Box>
              ))}
            </Flex>
          ) : (
            <Slider {...settings}>
              {props.allProducts.map((product, index) => (
                <Box
                  key={index}
                  p="0px 10px"
                  textAlign="center"
                  cursor="pointer"
                  onClick={() =>
                    props.onClickBoardDetail({ id: product.board?.id ?? '' })
                  }>
                  <MainProductItems
                    title={product.name ?? ''}
                    image={product.picture ?? ''}
                  />
                </Box>
              ))}
            </Slider>
          )}
        </Box>
      </Center>
    </>
  )
}

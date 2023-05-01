import { Box, Center } from '@chakra-ui/react'
import { AllProductsUIProps } from './AllProducts.types'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainProductItems from '../../components/mainProductItems'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function AllProductsUI(props: AllProductsUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4.1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    // pauseOnHover: true,
  }

  return (
    <>
      <CategoryHeader
        categoryTitle={props.categoryTitle}
        moreButtonHidden={true}
        moreButtonLink="/allProductsMore"
      />
      <Center>
        <Box maxWidth="1100px">
          <Slider {...settings}>
            {props.allProducts.map((product, index) => (
              <Box key={index} p="0px 10px" textAlign="center">
                <MainProductItems
                  title={product.name ?? ''}
                  image={product.picture ?? ''}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Center>
    </>
  )
}

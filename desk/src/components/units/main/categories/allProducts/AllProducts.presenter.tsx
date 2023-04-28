import { Box, Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainProductItems from '../../components/mainProductItems'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function AllProductsUI() {
  const categoryTitle = '💻 전체 장비 모아보기'
  // api 연결 예정 - UI 테스트를 위한 임시지정값

  const images = [
    'https://images.unsplash.com/photo-1542280756-2992e05fef7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
    'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
    'https://images.unsplash.com/photo-1496878632226-93afc36151ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1542280756-2992e05fef7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  ]

  const titles = [
    'Macbook air M2 13',
    'Apple Keyboard',
    'Logitech MX Master3',
    'Apple Mouse',
    'Macbook air M2 13',
  ]

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4.1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
  }

  return (
    <>
      <CategoryHeader
        categoryTitle={categoryTitle}
        moreButtonHidden={true}
        moreButtonLink="/allProductsMore"
      />
      <Center>
        <Box maxWidth="1100px">
          <Slider {...settings}>
            {titles.map((title, index) => (
              <div key={index} style={{ padding: '0 10px' }}>
                <MainProductItems title={title} image={images[index % images.length]} />
              </div>
            ))}
          </Slider>
        </Box>
      </Center>
    </>
  )
}

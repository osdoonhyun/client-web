import { useState } from 'react'
import { Box, Center, IconButton, useMediaQuery } from '@chakra-ui/react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { MainBoardSliderProps } from './types'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MainBoardSlider({ images }: MainBoardSliderProps) {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [arrowVisible, setArrowVisible] = useState(true)
  const [isMobile] = useMediaQuery('(max-width: 767px)')
  const arrowSize = isMobile ? '30px' : '50px'

  const PrevArrow = (props: CustomArrowProps) => {
    const { onClick, className } = props

    return (
      <IconButton
        css={{ '&:hover, &:focus': { background: 'none', color: '#666bffd2' } }}
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        zIndex={2}
        top="40%"
        left="0"
        onClick={onClick}
        color="#f8f8f8c8"
        display={arrowVisible ? 'block' : 'none'}>
        <IoIosArrowDropleftCircle size={arrowSize} />
      </IconButton>
    )
  }

  const NextArrow = (props: CustomArrowProps) => {
    const { onClick, className } = props
    const arrowRightPosition = isMobile ? '-8px' : '0'

    return (
      <IconButton
        css={{ '&:hover, &:focus': { background: 'none', color: '#666bffd2' } }}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        zIndex={2}
        top="40%"
        right={arrowRightPosition}
        onClick={onClick}
        color="#f8f8f8c8"
        display={arrowVisible ? 'block' : 'none'}>
        <IoIosArrowDroprightCircle size={arrowSize} />
      </IconButton>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: () => setArrowVisible(false),
    afterChange: () => setArrowVisible(true),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // arrows: false,
        },
      },
    ],
  }

  return (
    <>
      <Box position="relative" w="full" h="260" overflow="hidden">
        <Box width={{ base: '100%', md: '80%', lg: '1080px' }} mx="auto">
          <Slider {...settings} ref={slider => setSlider(slider)}>
            {images.map((src, index) => (
              <Box key={index} p={1}>
                <Center>
                  <MainImageStyle src={src} alt={`Image ${index}`} />
                </Center>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  )
}

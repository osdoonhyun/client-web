import { useState } from 'react'
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { MainBoardSliderProps } from './types'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MainBoardSlider({ images }: MainBoardSliderProps) {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [arrowVisible, setArrowVisible] = useState(true)

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
        left="-3"
        onClick={onClick}
        color={useColorModeValue('#2323237b', '#f8f8f89a')}
        display={arrowVisible ? 'block' : 'none'}>
        <IoIosArrowDropleftCircle size="30px" />
      </IconButton>
    )
  }

  const NextArrow = (props: CustomArrowProps) => {
    const { onClick, className } = props
    return (
      <IconButton
        css={{ '&:hover, &:focus': { background: 'none', color: '#666bffd2' } }}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        zIndex={2}
        top="40%"
        right="-4"
        onClick={onClick}
        color={useColorModeValue('#2323237b', '#f8f8f89a')}
        display={arrowVisible ? 'block' : 'none'}>
        <IoIosArrowDroprightCircle size="30px" />
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
  }

  return (
    <>
      <Box position="relative" width="full" overflow="hidden">
        <Box width={{ base: '100%', md: '80%', lg: '1080px' }} mx="auto">
          <Slider {...settings} ref={slider => setSlider(slider)}>
            {images.map((src, index) => (
              <Box key={index} p={2}>
                <MainImageStyle src={src} alt={`Image ${index}`} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  )
}

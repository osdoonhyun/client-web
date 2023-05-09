import { AspectRatio, Box, IconButton, Image, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import { CarouselProps } from './types'

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel(props: CarouselProps) {
  const [slider, setSlider] = useState<Slider | null>(null)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '20px' })

  return (
    <Box position={'relative'} width={'full'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {props.imageURLs.length > 1 && (
        <>
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            bgColor={'rgba(35, 35, 35, 0.3)'}
            borderRadius={'full'}
            onClick={() => slider?.slickPrev()}
            _hover={{
              bg: 'rgba(35, 35, 35, 0.5)',
            }}>
            <BiLeftArrowAlt size="20px" color="white" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            bgColor={'rgba(35, 35, 35, 0.3)'}
            borderRadius={'full'}
            onClick={() => slider?.slickNext()}
            _hover={{
              bg: 'rgba(35, 35, 35, 0.5)',
            }}>
            <BiRightArrowAlt size="20px" color="white" />
          </IconButton>
        </>
      )}
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {props.imageURLs.map((url, index) => (
          <AspectRatio key={index} maxW={'100%'} ratio={16 / 9}>
            <Image
              src={url}
              position="relative"
              objectFit={'cover'}
              borderRadius={'16px'}
            />
          </AspectRatio>
        ))}
      </Slider>
    </Box>
  )
}

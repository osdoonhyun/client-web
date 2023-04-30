import { useState } from 'react'
import {
  Avatar,
  Box,
  Center,
  Flex,
  IconButton,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { MainBoardSliderProps } from './types'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MainBoardSlider({
  images,
  titles = [],
  writers = [],
  children,
}: MainBoardSliderProps) {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [arrowVisible, setArrowVisible] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [isMobile] = useMediaQuery('(max-width: 767px)')

  const onClickPrev = () => {
    const moveBy = isMobile ? 2 : 4
    slider?.slickGoTo(currentSlide - moveBy)
  }

  const onClickNext = () => {
    const moveBy = isMobile ? 2 : 4
    slider?.slickGoTo(currentSlide + moveBy)
  }

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
        left="2"
        onClick={onClickPrev}
        color="#f8f8f8c8"
        display={arrowVisible ? 'block' : 'none'}>
        <IoIosArrowDropleftCircle size="50px" />
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
        top="40%"
        right={arrowRightPosition}
        onClick={onClickNext}
        color="#f8f8f8c8"
        display={arrowVisible ? 'block' : 'none'}>
        <IoIosArrowDroprightCircle size="50px" />
      </IconButton>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.15,
    slidesToScroll: isMobile ? 2 : 4,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex)
      setArrowVisible(false)
    },
    afterChange: () => setArrowVisible(true),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: '2rem',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          arrows: false,
          centerMode: true,
          centerPadding: '2rem',
        },
      },
    ],
  }

  return (
    <>
      <Box position="relative" w="full" h="340px" overflow="hidden">
        <Box width={{ base: '100%', md: '80%', lg: '1090px' }} mx="auto">
          <Slider {...settings} ref={slider => setSlider(slider)}>
            {children
              ? children
              : images.map((src, index) => (
                  <Box
                    key={index}
                    p={1}
                    color={useColorModeValue('dGray.dark', 'dGray.light')}>
                    <Flex flexDirection="column">
                      <Center pl="5px">
                        <MainImageStyle src={src} alt={`Image ${index}`} />
                      </Center>
                      <Center>
                        <Flex flexDirection="column">
                          <Center
                            fontSize="md"
                            fontWeight="bold"
                            textAlign="center"
                            mt={2}
                            w="250px"
                            p="0px 10px 0px 10px">
                            {titles[index] ?? ''}
                          </Center>
                          <Center fontSize="sm" mt={1}>
                            <Avatar w="20px" h="20px" mr="5px" />
                            {writers[index] ?? ''}
                          </Center>
                        </Flex>
                      </Center>
                    </Flex>
                  </Box>
                ))}
          </Slider>
        </Box>
      </Box>
    </>
  )
}

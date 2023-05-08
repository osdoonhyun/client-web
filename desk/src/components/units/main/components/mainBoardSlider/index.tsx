import { useState } from 'react'
import { useRouter } from 'next/router'
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
import MainImageStyle from '../mainImageStyle'
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MainBoardSlider({
  images,
  titles = [],
  writers = [],
  writerImages = [],
  boardIds = [],
  userIds = [],
  isLikedArray = [],
}: MainBoardSliderProps) {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [arrowVisible, setArrowVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const onClickBoardDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`)
  }

  const onClickUserDetail = (userId: string) => {
    router.push(`/${userId}`)
  }

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
        sx={{ '&:hover, &:focus': { background: 'none', color: '#666bffd2' } }}
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        zIndex={2}
        top="30%"
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
        sx={{ '&:hover, &:focus': { background: 'none', color: '#666bffd2' } }}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        top="30%"
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
    infinite: images.length > 4,
    speed: 500,
    slidesToShow: 4.15,
    slidesToScroll: isMobile ? 2 : 4,
    swipe: isMobile,
    draggable: isMobile,
    touchMove: isMobile,
    swipeToSlide: isMobile,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex)
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

  const renderContent = () => {
    return images.map((src, index) => (
      <Box
        key={index}
        p={1}
        color={useColorModeValue('dGray.dark', 'dGray.light')}
        w={isMobile ? 'calc(50% -3px)' : 'auto'}
        mr={isMobile ? '8px' : '0'}
        mb={isMobile ? '8px' : '0'}
        flexShrink={0}>
        <Flex flexDirection="column">
          <Center
            pl="5px"
            mb="5px"
            onClick={() => onClickBoardDetail(boardIds[index])}
            cursor="pointer">
            <MainImageStyle
              src={src}
              alt={`Image ${index}`}
              boardId={boardIds[index]}
              isLiked={isLikedArray[index]}
            />
          </Center>
          <Center>
            <Flex flexDirection="column">
              <Center
                fontSize={{ base: '11pt', md: 'md' }}
                fontWeight="bold"
                textAlign="center"
                mt={2}
                w="100%"
                p="5px"
                cursor="pointer"
                onClick={() => onClickBoardDetail(boardIds[index])}
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  maxWidth: '240px',
                  margin: '0 auto',
                  whiteSpace: 'normal',
                }}>
                {titles[index] ?? ''}
              </Center>
              <Center
                w="100%"
                mt={1}
                cursor="pointer"
                fontSize={{ base: 'xs', md: '11pt' }}
                onClick={() => onClickUserDetail(userIds[index])}>
                <Avatar
                  mr="5px"
                  w="20px"
                  h="20px"
                  size={'xs'}
                  name={writers[index]}
                  src={writerImages[index] || 'https://bit.ly/broken-link'}
                />
                {writers[index] ?? ''}
              </Center>
            </Flex>
          </Center>
        </Flex>
      </Box>
    ))
  }

  return (
    <>
      <Box position="relative" w="full" h="360px" overflow="hidden" mb="1">
        <Box width={{ base: '100%', md: '80%', lg: '1090px' }} mx="auto">
          {isMobile ? (
            <Flex
              flexDirection="row"
              overflowX="scroll"
              overflowY="hidden"
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
              pr="30px">
              {renderContent()}
            </Flex>
          ) : (
            <Slider
              {...settings}
              ref={slider => setSlider(slider)}
              onInit={() => setArrowVisible(true)}>
              {renderContent()}
            </Slider>
          )}
        </Box>
      </Box>
    </>
  )
}

import { maxWidth } from '@/src/commons/libraries/layout'
import Carousel from '@/src/components/ui/carousel'
import { Box, Center, HStack, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import ProductItemCardList from '../components/productItemCardList'
import ProfileHeader from '../components/profileHeader'
import TagWithCountState from '../components/tagWithCountState'
import TitleWithDescription from '../components/titleWithDescription'
import { BoardDetailUIProps } from './Detail.types'

export default function BoardDetailUI(props: BoardDetailUIProps) {
  return (
    <VStack
      maxW={maxWidth.lg}
      margin={'0 auto'}
      pl={'10px'}
      pr={'10px'}
      align={'stretch'}>
      <Box mt={'40px'} mb={'10px'}>
        <ProfileHeader
          createdAt={props.boardData.createdAt}
          userData={props.boardData.writer}
        />
      </Box>
      <Carousel imageURLs={props.boardData.pictures.map(item => item.url)} />
      <Box pt={'8px'}>
        <TagWithCountState
          views={props.boardData.views}
          likes={props.boardData.likes}
          comments={props.boardData.comments?.length}
          hashTags={props.boardData.hashtags?.map(item => item.hashtag)}
        />
      </Box>
      <Center pt={'60px'} pb={'16px'}>
        <HStack>
          <FaQuoteLeft size={12} color={useColorModeValue('#232323B3', '#BABABA')} />
          <Text
            fontSize={26}
            fontWeight={800}
            color={useColorModeValue('dBlack', 'dGray.medium')}
            pt={'10px'}>
            {props.boardData.title}
          </Text>
          <FaQuoteRight size={12} color={useColorModeValue('#232323B3', '#BABABA')} />
        </HStack>
      </Center>
      <Box pt={'20px'}>
        <TitleWithDescription
          title="책상을 자랑해주세요."
          description={props.boardData.description}
        />
      </Box>
      <Box pt={'60px'}>
        <ProductItemCardList
          title="어떤 장비를 사용하시나요?"
          products={props.boardData.products}
        />
      </Box>
      <Box pt={'60px'}>
        <TitleWithDescription
          title="추천하고 싶은 아이템이 있나요?"
          description={props.boardData.recommend ?? ''}
        />
      </Box>
    </VStack>
  )
}

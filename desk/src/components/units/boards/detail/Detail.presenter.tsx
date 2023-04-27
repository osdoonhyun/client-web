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
  console.log('#########', props.boardData)
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
      <TagWithCountState
        views={props.boardData.views}
        likes={props.boardData.likes}
        comments={props.boardData.comments?.length}
        hashTags={props.boardData.hashtags?.map(item => item.hashtag)}
      />
      <Center>
        <HStack>
          <FaQuoteLeft size={12} color="#BABABA" />
          <Text
            fontSize={22}
            fontWeight={800}
            color={useColorModeValue('dGray.dark', 'dGray.medium')}
            pt={'10px'}>
            제목이 들어감
          </Text>
          <FaQuoteRight size={12} color="#BABABA" />
        </HStack>
      </Center>
      <TitleWithDescription
        title="책상을 자랑해주세요."
        description="프론트엔드 이직을 희망하는 예비 개발자의 데스크 셋업입니다! 최근 맥북 프로를
          구매하면서 애플 제품에 대한 관심이 많아졌습니다."
      />
      <ProductItemCardList title="어떤 장비를 사용하시나요?" />
      <TitleWithDescription
        title="추천하고 싶은 아이템이 있나요?"
        description="프론트엔드 이직을 희망하는 예비 개발자의 데스크 셋업입니다! 최근 맥북 프로를
          구매하면서 애플 제품에 대한 관심이 많아졌습니다."
      />
    </VStack>
  )
}

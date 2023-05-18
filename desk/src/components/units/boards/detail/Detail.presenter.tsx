import { Box, Center, HStack, Text, chakra, useColorModeValue } from '@chakra-ui/react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import CountStateWithLike from '../components/countStateWithLike'
import DetailBoardImages from '../components/detailBoardImages'
import DetailBoardTags from '../components/detailBoardTags'
import ProductItemCardList from '../components/productItemCardList'
import ProfileHeader from '../components/profileHeader'
import TitleWithDescription from '../components/titleWithDescription'
import { BoardDetailUIProps } from './Detail.types'

const QuoteLeft = chakra(FaQuoteLeft)
const QuoteRight = chakra(FaQuoteRight)

export default function BoardDetailUI(props: BoardDetailUIProps) {
  return (
    <>
      <Box mt={'40px'} mb={'10px'}>
        <ProfileHeader
          boardId={props.boardData.id}
          createdAt={props.boardData.createdAt}
          userData={props.boardData.writer}
        />
      </Box>
      <DetailBoardImages
        boardId={props.boardData.id}
        likers={props.boardData.likers ?? []}
        imageURLs={props.boardData.pictures.map(item => item.url)}
      />
      <Box>
        <CountStateWithLike
          boardId={props.boardData.id}
          views={props.boardData.views}
          likes={props.boardData.likes}
          likers={props.boardData.likers ?? []}
          comments={props.boardData.comments?.length}
        />
      </Box>
      <Center pt={'60px'} pb={'16px'}>
        <HStack justify={'space-between'} spacing={5} px={2}>
          <QuoteLeft
            minW={'18px'}
            minH={'18px'}
            color={useColorModeValue('#232323B3', '#BABABA')}
          />
          <Text
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight={800}
            color={useColorModeValue('dGray.dark', 'dGray.medium')}
            pt={'10px'}>
            {props.boardData.title}
          </Text>
          <QuoteRight
            minW={'18px'}
            minH={'18px'}
            color={useColorModeValue('#232323B3', '#BABABA')}
          />
        </HStack>
      </Center>
      <Box pt={'20px'}>
        <TitleWithDescription title="" description={props.boardData.description} />
      </Box>
      <Box pt={'60px'}>
        <ProductItemCardList title="사용중인 장비" products={props.boardData.products} />
      </Box>
      {props.boardData.recommend && (
        <Box pt={'60px'}>
          <TitleWithDescription title="" description={props.boardData.recommend ?? ''} />
        </Box>
      )}
      <Box pt={'80px'}>
        <DetailBoardTags hashTags={props.boardData.hashtags?.map(item => item.hashtag)} />
      </Box>
    </>
  )
}

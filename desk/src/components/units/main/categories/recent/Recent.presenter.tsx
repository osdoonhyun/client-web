import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'

export default function RecentUI() {
  const categoryTitle = '최근 게시물'
  // api 연결 예정 - UI 테스트를 위한 이미지값
  const images = [
    '/test1.jpeg',
    '/test1.jpeg',
    '/test1.jpeg',
    '/test1.jpeg',
    '/test1.jpeg',
    '/test1.jpeg',
    '/test1.jpeg',
    '/test1.jpeg',
  ]

  return (
    <>
      <CategoryHeader
        categoryTitle={categoryTitle}
        moreButtonHidden={true}
        moreButtonLink="/recentMore"
      />
      <Center m={2}>
        <MainBoardSlider images={images} />
      </Center>
    </>
  )
}

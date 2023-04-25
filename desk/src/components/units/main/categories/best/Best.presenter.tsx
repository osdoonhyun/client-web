import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'

export default function BestUI() {
  const categoryTitle = 'Best'

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
      <CategoryHeader categoryTitle={categoryTitle} moreButtonHidden={false} />
      <Center m={2}>
        <MainBoardSlider images={images} />
      </Center>
    </>
  )
}

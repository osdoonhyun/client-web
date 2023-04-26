import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainProductItems from '../../components/mainProductItems'

export default function AllProductsUI() {
  const categoryTitle = '💻 전체 장비 모아보기'
  // api 연결 예정 - UI 테스트를 위한 임시지정값
  const titles = [
    'Macbook air M2 13 맥북프로 Macbook air M2 13 맥북프로 Macbook air M2 13 맥북프로',
    'Macbook air M2 13',
    'Macbook air M2 13',
    'Macbook air M2 13',
  ]
  return (
    <>
      <CategoryHeader
        categoryTitle={categoryTitle}
        moreButtonHidden={true}
        moreButtonLink="/recentMore"
      />
      <Center m={2}>
        {titles.map((title, index) => (
          <MainProductItems key={index} title={title} />
        ))}
      </Center>
    </>
  )
}

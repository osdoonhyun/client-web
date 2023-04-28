import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'
import { RecentUIProps } from './Recent.types'

export default function RecentUI(props: RecentUIProps) {
  const categoryTitle = '⏱️ 최근 게시물'
  const images = props.boards.map(
    board => board.pictures.find(picture => picture.isMain)?.url ?? '',
  )

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

import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'
import { BestUIProps } from './Best.types'

export default function BestUI(props: BestUIProps) {
  const categoryTitle = '🏆 인기 게시물 TOP 10 🏆'
  const images = props.bestBoards.map(
    board => board.pictures.find(picture => picture.isMain)?.url ?? '',
  )

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} moreButtonHidden={false} />
      <Center m={2}>
        <MainBoardSlider images={images} />
      </Center>
    </>
  )
}

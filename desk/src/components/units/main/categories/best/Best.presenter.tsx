import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'
import { BestUIProps } from './Best.types'

export default function BestUI(props: BestUIProps) {
  return (
    <>
      <CategoryHeader categoryTitle={props.categoryTitle} moreButtonHidden={false} />
      <Center m={2}>
        <MainBoardSlider
          images={props.images}
          titles={props.titles}
          writers={props.writers}
          writerImages={props.writerImages}
          boardIds={props.boardIds}
          userIds={props.userIds}
          isLikedArray={props.isLikedArray}
        />
      </Center>
    </>
  )
}

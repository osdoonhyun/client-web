import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import { LikeBoardsUIProps } from './Like.types'
import MainBoardSlider from '../../components/mainBoardSlider'

export default function LikeBoardsUI(props: LikeBoardsUIProps) {
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
        />
      </Center>
    </>
  )
}

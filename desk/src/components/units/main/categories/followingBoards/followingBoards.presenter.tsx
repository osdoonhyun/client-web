import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'
import { FollowingBoardsProps } from './followingBoards.types'

export default function FollowingBoardsUI(props: FollowingBoardsProps) {
  return (
    <>
      <CategoryHeader
        categoryTitle={props.categoryTitle}
        moreButtonHidden={true}
        moreButtonLink="/followingBoardsMore"
      />
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

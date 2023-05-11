import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'
import { RecentUIProps } from './Recent.types'

export default function RecentUI(props: RecentUIProps) {
  return (
    <>
      <CategoryHeader
        categoryTitle={props.categoryTitle}
        moreButtonHidden={true}
        moreButtonLink="/recentMore"
      />
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

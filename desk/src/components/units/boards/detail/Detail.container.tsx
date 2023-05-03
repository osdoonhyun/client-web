import BoardDetailUI from './Detail.presenter'
import { BoardDetailProps } from './Detail.types'

export default function BoardDetail(props: BoardDetailProps) {
  return (
    <>
      <BoardDetailUI boardData={props.boardData} />
    </>
  )
}

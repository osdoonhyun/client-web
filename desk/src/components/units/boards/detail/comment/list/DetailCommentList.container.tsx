import BoardDetailCommentListUI from './DetailCommentList.presenter'
import { BoardDetailCommentListProps } from './DetailCommentList.types'

export default function BoardDetailCommentList(props: BoardDetailCommentListProps) {
  return <BoardDetailCommentListUI commentDatas={props.commentDatas} />
}

export type LikeButtonProps = {
  boardId: string
  isLiked: boolean
  isLoggedIn: boolean
  onClickLikeButton: (e: React.MouseEvent<HTMLDivElement>) => void
}

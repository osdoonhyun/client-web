export type UserUIProps = {
  isMyPage: boolean
  isLiked: boolean
  toggleIsLiked: () => void
  showUserPosts: boolean
  showLikedPosts: boolean
  onClickShowUserPosts: () => void
  onClickShowLikedPosts: () => void
  onClickMoveToAccountEdit: () => void
}

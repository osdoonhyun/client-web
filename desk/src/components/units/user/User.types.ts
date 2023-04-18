export type UserUIProps = {
  isMyPage: boolean
  isLiked: boolean
  setIsLiked: () => void
  showUserPosts: boolean
  showLikedPosts: boolean
  onClickShowUserPosts: () => void
  onClickShowLikedPosts: () => void
}

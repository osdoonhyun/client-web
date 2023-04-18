export type UserUIProps = {
  isMyPage: boolean
  isLiked: boolean
  setIsLiked: {
    toggle: () => void
  }
  showUserPosts: boolean
  showLikedPosts: boolean
  onClickShowUserPosts: () => void
  onClickShowLikedPosts: () => void
}

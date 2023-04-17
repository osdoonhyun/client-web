export type UserUIProps = {
  isLiked: boolean
  setIsLiked: {
    toggle: () => void
  }
  showUserPosts: boolean
  showLikedPosts: boolean
  onClickShowUserPosts: () => void
  onClickShowLikedPosts: () => void
}

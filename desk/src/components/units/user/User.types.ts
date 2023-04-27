export type UserUIProps = {
  isLoggedIn: boolean
  isMyPage: boolean
  isLiked: boolean
  toggleIsLiked: () => void
  onClickMoveToAccountEdit: () => void
  showUserPosts: boolean
  showUserProductPosts: boolean
  showLikedPosts: boolean
  onClickTab: (id: number) => void
}

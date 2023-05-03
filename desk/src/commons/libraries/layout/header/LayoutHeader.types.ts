import { MouseEvent } from 'react'

export type LayoutHeaderUIProps = {
  onClickMoveToLogin: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToUser: (userId: string) => (event: MouseEvent<HTMLButtonElement>) => void
}

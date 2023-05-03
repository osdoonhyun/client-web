import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import LayoutHeaderUI from './LayoutHeader.presenter'

export default function LayoutHeader() {
  const router = useRouter()

  const onClickMoveToLogin = (event: MouseEvent<HTMLButtonElement>) => {
    router.push('/auth/login')
  }

  const onClickMoveToUser =
    (userId: string) => (event: MouseEvent<HTMLButtonElement>) => {
      router.push(`/${userId}`)
    }

  return (
    <LayoutHeaderUI
      onClickMoveToUser={onClickMoveToUser}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  )
}

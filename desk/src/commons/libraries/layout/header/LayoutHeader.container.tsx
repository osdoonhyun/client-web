import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'
import LayoutHeaderUI from './LayoutHeader.presenter'

export default function LayoutHeader() {
  const router = useRouter()

  const onClickMoveToUser: MouseEventHandler<HTMLButtonElement> = event => {
    router.push('/user')
  }

  return <LayoutHeaderUI onClickMoveToUser={onClickMoveToUser} />
}

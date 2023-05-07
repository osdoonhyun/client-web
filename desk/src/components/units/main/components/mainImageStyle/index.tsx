import Image from 'next/image'
import LikeButton from '../LikeButton'
import { MainImageStyleProps } from './types'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function MainImageStyle(props: MainImageStyleProps) {
  const { isLoggedIn, openModal } = useAuth()
  const { src, alt, boardId, isLiked } = props

  const onClickUnAuth = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.stopPropagation()
      openModal('LOGIN')
    }
  }

  const onClickLikeButton = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLoggedIn) {
      e.stopPropagation()
      openModal('LOGIN')
    }
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Image
          src={src}
          alt={alt}
          width={250}
          height={250}
          quality={80}
          loading="lazy"
          style={{ borderRadius: '10px' }}
        />
        <div onClick={onClickUnAuth}>
          <LikeButton
            boardId={boardId ?? ''}
            isLiked={isLiked ?? false}
            isLoggedIn={isLoggedIn}
            onClickLikeButton={onClickLikeButton}
          />
        </div>
      </div>
    </>
  )
}

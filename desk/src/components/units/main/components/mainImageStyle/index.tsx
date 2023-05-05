import Image from 'next/image'
import LikeButton from '../LikeButton'
import { MainImageStyleProps } from './types'

export default function MainImageStyle(props: MainImageStyleProps) {
  const { src, alt, boardId, isLiked } = props
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
        <LikeButton boardId={boardId} isLiked={isLiked} />
      </div>
    </>
  )
}

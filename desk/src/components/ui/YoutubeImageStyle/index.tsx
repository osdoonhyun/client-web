import Image from 'next/image'
import { YoutubeImageStyleProps } from './types'

export default function YoutubeImageStyle(props: YoutubeImageStyleProps) {
  const { src, alt } = props
  return (
    <Image
      src={src}
      alt={alt}
      width={340}
      height={250}
      quality={80}
      loading="lazy"
      style={{ borderRadius: '10px' }}
    />
  )
}

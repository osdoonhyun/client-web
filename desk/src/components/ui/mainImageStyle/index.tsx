import Image from 'next/image'
import { MainImageStyleProps } from './types'

export default function MainImageStyle(props: MainImageStyleProps) {
  const { src, alt } = props
  return (
    <Image
      src={src}
      alt={alt}
      width={250}
      height={250}
      quality={80}
      loading="lazy"
      style={{ borderRadius: '10px' }}
    />
  )
}

import Image from 'next/image'
import { YoutubeImageStyleProps } from './types'
import { useEffect, useState } from 'react'

export default function YoutubeImageStyle(props: YoutubeImageStyleProps) {
  const { src, alt } = props
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    return () =>
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  const imageWidth = windowWidth / 3

  return (
    <Image
      src={src}
      alt={alt}
      width={345}
      height={250}
      quality={80}
      loading="lazy"
      style={{ borderRadius: '10px', width: `${imageWidth}px` }}
    />
  )
}

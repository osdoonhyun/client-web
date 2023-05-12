import { Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'

type LogoProps = {
  onClick?: MouseEventHandler<HTMLDivElement>
}

export default function Logo(props: LogoProps) {
  const router = useRouter()

  const onClickMoveToMain: MouseEventHandler<HTMLDivElement> = event => {
    router.push('/main')
  }

  return (
    <>
      <Flex alignItems={'center'} pl={{ base: '1', md: '4' }} cursor="pointer">
        <Image
          src="/logo.png"
          width={'190px'}
          height={'50px'}
          onClick={onClickMoveToMain}
        />
      </Flex>
    </>
  )
}

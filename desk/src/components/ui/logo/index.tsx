import { Box, Text } from '@chakra-ui/react'
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
    <Box mb={4} ml={5}>
      <Text
        as="b"
        fontSize="30px"
        color="dPrimary"
        cursor="pointer"
        onClick={onClickMoveToMain}>
        dechaive
        <Text
          as="b"
          fontSize="50px"
          color="dPrimary"
          marginLeft="5px"
          marginBottom="50px">
          .
        </Text>
      </Text>
    </Box>
  )
}

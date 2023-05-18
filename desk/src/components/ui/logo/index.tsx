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
    <Box mb={4}>
      <Text
        as="b"
        fontSize={{ base: '22px', sm: '26px', md: '30px' }}
        color="dPrimary"
        cursor="pointer"
        onClick={onClickMoveToMain}>
        dechive
        <Text
          as="b"
          fontSize={{ base: '40px', sm: '46px', md: '50px' }}
          color="dPrimary"
          marginLeft="5px"
          marginBottom="50px">
          .
        </Text>
      </Text>
    </Box>
  )
}

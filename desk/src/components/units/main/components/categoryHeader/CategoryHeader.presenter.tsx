import { Container, Text, useColorModeValue, Box } from '@chakra-ui/react'
import { CategoryHeaderUIProps } from './CategoryHeader.types'
import Link from 'next/link'

export default function CategoryHeaderUI(props: CategoryHeaderUIProps) {
  return (
    <>
      <Container
        maxW="1110px"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        mt="35px"
        fontSize="14pt"
        fontWeight="700"
        color={useColorModeValue('dGray.dark', 'dGray.light')}>
        <Text>{props.categoryTitle}</Text>
        {props.moreButtonHidden && (
          <Link href={props.moreButtonLink || '#'}>
            <Box as="a" cursor="pointer" fontSize="12pt" mt="5px">
              더보기 {`>`}
            </Box>
          </Link>
        )}
      </Container>
    </>
  )
}

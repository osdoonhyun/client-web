import { Container, Text, useColorModeValue, Box } from '@chakra-ui/react'
import { CategoryHeaderUIProps } from './CategoryHeader.types'
import Link from 'next/link'

export default function CategoryHeaderUI(props: CategoryHeaderUIProps) {
  return (
    <>
      <Container
        maxW="1090px"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        mt="30px"
        color={useColorModeValue('dGray.dark', 'dGray.light')}
        fontWeight="600">
        <Text>{props.categoryTitle}</Text>
        {props.moreButtonHidden && (
          <Link href={props.moreButtonLink || '#'}>
            <Box as="a" cursor="pointer">
              더보기 {`>`}
            </Box>
          </Link>
        )}
      </Container>
    </>
  )
}

import { Center, Spinner } from '@chakra-ui/react'

export default function CustomSpinner() {
  return (
    <>
      <Center>
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="dPrimary"
          size="lg"
        />
      </Center>
    </>
  )
}

import {
  Card,
  CardBody,
  Flex,
  Center,
  Box,
  Image,
  Stack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { MainProductItemsProps } from './types'

export default function MainProductItems(props: MainProductItemsProps) {
  return (
    <VStack align={'flex-start'} m="2">
      <Flex justify={'flex-start'} align={'center'} wrap={'wrap'}>
        <Card w="250px" h="270px" bgColor={useColorModeValue('dGray.light', '#a0a0a01e')}>
          <CardBody borderRadius="lg">
            <Image w="100%" h="150px" borderRadius="5px" src={props.image} alt="" />
            <Stack mt="5">
              <Center
                w="210px"
                fontWeight="600"
                fontSize={{ base: 'sm', md: 'md' }}
                color={useColorModeValue('dGray.dark', 'dGray.light')}>
                <Box noOfLines={2}>{props.title}</Box>
              </Center>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </VStack>
  )
}

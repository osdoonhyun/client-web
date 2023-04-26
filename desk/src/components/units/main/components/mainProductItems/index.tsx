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
        <Card w="260px" h="270px" bgColor={useColorModeValue('dGray.light', '#a0a0a01e')}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1542280756-2992e05fef7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              borderRadius="lg"
            />
            <Stack mt="5">
              <Center
                fontSize="13pt"
                fontWeight="600"
                w="220px"
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

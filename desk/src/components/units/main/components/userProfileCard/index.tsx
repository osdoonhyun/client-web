import {
  Card,
  CardBody,
  Flex,
  Center,
  Box,
  VStack,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react'
import { ProfileCardProps } from './types'

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <>
      <VStack>
        <Flex my={3} justify={'flex-start'} align={'center'} wrap={'wrap'}>
          <Card
            w="250px"
            h="295px"
            cursor="pointer"
            bgColor={useColorModeValue('dGray.light', '#a0a0a01e')}
            _hover={{
              borderWidth: '2px',
              borderColor: 'dPrimaryHover.transparency',
              transform: 'scale(1.03)',
            }}
            onClick={props.onClick}>
            <CardBody borderRadius="lg">
              <Center mt={'20px'}>
                <Avatar
                  size={'xl'}
                  name={props.nickName}
                  src={props.image ?? 'https://bit.ly/broken-link'}
                />
              </Center>
              <Flex flexDirection={'column'} mt={5}>
                <Center>
                  <Center
                    p={'2px 8px 1px 8px'}
                    w="fit-content"
                    bg="dPrimary"
                    color="white"
                    borderRadius={'4px'}
                    fontWeight="700"
                    letterSpacing={1}
                    fontSize={{ base: 'xs', md: 'xs' }}>
                    {props.jobGroup}
                  </Center>
                </Center>
                <Center
                  mt={4}
                  w="100%"
                  fontWeight="700"
                  fontSize={{ base: 'sm', md: '13pt' }}
                  color={useColorModeValue('dGray.dark', 'dGray.light')}>
                  {props.nickName}
                </Center>
                <Center
                  mt={4}
                  fontWeight="600"
                  fontSize={{ base: 'sm', md: 'md' }}
                  color={useColorModeValue('dGray.dark', 'dGray.light')}>
                  <Flex
                    justifyContent="space-around"
                    color={useColorModeValue('#232323d5', 'dGray.light')}>
                    <Center mx={4}>
                      팔로우
                      <Box ml={1} fontWeight="800">
                        {props.followeesCount}
                      </Box>
                    </Center>
                    <Center mx={4}>
                      팔로잉
                      <Box ml={1} fontWeight="800">
                        {props.followingsCount}
                      </Box>
                      <br />
                    </Center>
                  </Flex>
                </Center>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </VStack>
    </>
  )
}

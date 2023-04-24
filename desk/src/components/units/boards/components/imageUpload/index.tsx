import FileUpload from '@/src/components/ui/fileUpload'
import { AspectRatio, Badge, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { memo } from 'react'

export type ImageUploadProps = {
  onChangeFileUrls: (fileUrl: string, index: number) => void
}

function ImageUpload(props: ImageUploadProps) {
  return (
    <Flex flexDirection={'column'} ml={'-10px'}>
      <Box>
        <Text
          fontSize={16}
          fontWeight={700}
          color={useColorModeValue('dGray.dark', 'dGray.medium')}
          mb="8px"
          ml={'10px'}>
          {}님의 책상 사진을 업로드 해주세요.
        </Text>
      </Box>
      <Flex flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
        <AspectRatio w={{ base: '100%', md: '50%' }} ratio={1}>
          <Box p={'10px'}>
            <FileUpload
              type="file"
              width={'100%'}
              height={'100%'}
              fileUrl=""
              onChangeFileUrls={props.onChangeFileUrls}>
              <Badge
                bgColor={'dPrimary'}
                color={'white'}
                position={'absolute'}
                top={10}
                right={10}>
                대표사진
              </Badge>
            </FileUpload>
          </Box>
        </AspectRatio>
        <AspectRatio w={{ base: '100%', md: '50%' }} ratio={1}>
          <Flex flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'}>
            <AspectRatio width={'50%'} ratio={1}>
              <Box p={'10px'}>
                <FileUpload
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl=""
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              </Box>
            </AspectRatio>
            <AspectRatio width={'50%'} ratio={1}>
              <Box p={'10px'}>
                <FileUpload
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl=""
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              </Box>
            </AspectRatio>
            <AspectRatio width={'50%'} ratio={1}>
              <Box p={'10px'}>
                <FileUpload
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl=""
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              </Box>
            </AspectRatio>
            <AspectRatio width={'50%'} ratio={1}>
              <Box p={'10px'}>
                <FileUpload
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl=""
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              </Box>
            </AspectRatio>
          </Flex>
        </AspectRatio>
      </Flex>
    </Flex>
  )
}

export default memo(ImageUpload)

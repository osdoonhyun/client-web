import { useAuth } from '@/src/commons/hooks/useAuth'
import { TPicture } from '@/src/commons/types/generated/types'
import FileUpload from '@/src/components/ui/fileUpload'
import { AspectRatio, Badge, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { memo } from 'react'

export type ImageUploadProps = {
  imageDatas: TPicture[] | undefined
  onChangeFile: (file: File, index: number) => void
}

function ImageUpload(props: ImageUploadProps) {
  const { myUserInfo } = useAuth()

  return (
    <Flex flexDirection={'column'} ml={'-10px'}>
      <Box>
        <Text
          fontSize={16}
          fontWeight={700}
          color={useColorModeValue('dGray.dark', 'dGray.light')}
          mb="8px"
          ml={'10px'}>
          <Text>
            <Text display={'inline'} color={'dPrimary'} fontSize={16} fontWeight={800}>
              {myUserInfo?.nickName}
            </Text>
            님의 책상 사진을 업로드 해주세요.
          </Text>
        </Text>
      </Box>
      <Flex flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
        <AspectRatio w={{ base: '100%', md: '50%' }} ratio={1}>
          <Box p={'10px'}>
            <FileUpload
              index={0}
              type="file"
              width={'100%'}
              height={'100%'}
              fileUrl={props.imageDatas?.[0] && props.imageDatas?.[0].url}
              onChangeFile={props.onChangeFile}>
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
                  index={1}
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl={props.imageDatas?.[1] && props.imageDatas?.[1].url}
                  onChangeFile={props.onChangeFile}
                />
              </Box>
            </AspectRatio>
            <AspectRatio width={'50%'} ratio={1}>
              <Box p={'10px'}>
                <FileUpload
                  index={2}
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl={props.imageDatas?.[2] && props.imageDatas?.[2].url}
                  onChangeFile={props.onChangeFile}
                />
              </Box>
            </AspectRatio>
            <AspectRatio width={'50%'} ratio={1}>
              <Box p={'10px'}>
                <FileUpload
                  index={3}
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl={props.imageDatas?.[3] && props.imageDatas?.[3].url}
                  onChangeFile={props.onChangeFile}
                />
              </Box>
            </AspectRatio>
            <AspectRatio width={'50%'} ratio={1}>
              <Box p={'10px'}>
                <FileUpload
                  index={4}
                  type="file"
                  width={'100%'}
                  height={'100%'}
                  fileUrl={props.imageDatas?.[4] && props.imageDatas?.[4].url}
                  onChangeFile={props.onChangeFile}
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

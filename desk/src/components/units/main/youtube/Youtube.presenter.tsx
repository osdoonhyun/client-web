import { Box, Center, Flex, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import CategoryHeader from '../categoryHeader/CategoryHeader.container'
import YoutubeImageStyle from '@/src/components/ui/YoutubeImageStyle'
import { TYoutube } from '@/src/commons/types/generated/types'
import { FiEye } from 'react-icons/fi'

export type YoutubeUIProps = {
  youtubeData: TYoutube[]
}

export default function YoutubeUI({ youtubeData }: YoutubeUIProps) {
  const categoryTitle = '유튜브'
  const isMoreVisible = false

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} isMoreVisible={isMoreVisible} />
      <Center>
        <Flex m={2} pl={'2px'} pr={'2px'} maxWidth="1080px" overflowX="auto">
          {youtubeData.map((youtube: TYoutube, index: number) => (
            <Box key={youtube.videoUrl} m={2} flexShrink={0}>
              <YoutubeImageStyle src={youtube.thumbnailUrl} alt={youtube.videoUrl} />
              <Flex
                justifyContent="end"
                alignItems="center"
                pr="3px"
                color={useColorModeValue('dGray.dark', 'dGray.light')}
                fontWeight="500">
                <FiEye />
                <Text ml="5px">{youtube.views} views</Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Center>
    </>
  )
}

import { Box, Center, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import CategoryHeader from '../categoryHeader/CategoryHeader.container'
import YoutubeImageStyle from '@/src/components/ui/YoutubeImageStyle'
import { TYoutube } from '@/src/commons/types/generated/types'
import { FiEye } from 'react-icons/fi'

export type YoutubeUIProps = {
  youtubeData: TYoutube[]
}

export default function YoutubeUI(props: YoutubeUIProps) {
  const categoryTitle = '유튜브'

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} moreButtonHidden={false} />
      <Center>
        <Flex m={2} pl={'2px'} pr={'2px'} maxWidth="1080px" overflowX="auto">
          {props.youtubeData.map((youtube: TYoutube, index: number) => (
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

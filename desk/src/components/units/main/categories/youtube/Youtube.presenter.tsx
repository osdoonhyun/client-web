import {
  Box,
  Center,
  Flex,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
} from '@chakra-ui/react'
import { TYoutube } from '@/src/commons/types/generated/types'
import { YoutubeUIProps } from './Youtube.types'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import ReactPlayer from 'react-player'
import YoutubeSlider from '../../components/youtubeSlider'
import YoutubeImageStyle from '../../components/youtubeImageStyle'
import { formatNumber } from '@/src/commons/utils/util'

export default function YoutubeUI(props: YoutubeUIProps) {
  const categoryTitle = '유튜브'
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const getTitleSubstringLength = () => {
    if (isMobile) {
      return 25
    }
    return 30
  }

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} moreButtonHidden={false} />
      {isMobile ? (
        <Center>
          <Flex m="2" pl="2px" pr="2px" maxWidth="1080px" overflowX="auto">
            {props.youtubeData.map((youtube: TYoutube, index: number) => (
              <Box
                key={youtube.videoUrl}
                m="2"
                flexShrink="0"
                cursor="pointer"
                onClick={() => props.onClickSelectedVideo(youtube.videoUrl)}>
                <YoutubeImageStyle src={youtube.thumbnailUrl} alt={youtube.videoUrl} />
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  fontSize="13pt"
                  fontWeight="700"
                  color={useColorModeValue('dGray.dark', 'dGray.light')}>
                  <Box>
                    {youtube.title.substring(0, getTitleSubstringLength())}
                    {youtube.title.length > getTitleSubstringLength() ? '...' : ''}
                  </Box>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  pr="5px"
                  color={useColorModeValue('#8e9193', 'dGray.light')}
                  fontWeight="500"></Flex>
                <Flex
                  justifyContent="end"
                  fontSize="10pt"
                  fontWeight="500"
                  mr="5px"
                  mt="5px"
                  color={useColorModeValue('dGray.dark', 'dGray.light')}>
                  조회수: {formatNumber(youtube.views)}
                </Flex>
              </Box>
            ))}
          </Flex>
        </Center>
      ) : (
        <Center>
          <Box m="2" maxWidth="1100px" pr="5px">
            <YoutubeSlider
              youtubeData={props.youtubeData}
              onClickSelectedVideo={props.onClickSelectedVideo}
            />
          </Box>
        </Center>
      )}

      <Modal isOpen={!!props.selectedVideo} onClose={props.onClickCloseModal} size="4xl">
        <ModalOverlay />
        <ModalContent bg={'#000000d1'} borderRadius="10" p="10px">
          <ModalCloseButton />
          <ModalBody>
            <ReactPlayer
              url={props.selectedVideo}
              width="100%"
              height="450px"
              controls={true}
              muted={false}
              playing={true}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

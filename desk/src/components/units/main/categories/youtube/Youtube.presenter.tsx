import {
  Box,
  Center,
  Flex,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import { TYoutube } from '@/src/commons/types/generated/types'
import { YoutubeUIProps } from './Youtube.types'
import { FiEye } from 'react-icons/fi'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import YoutubeImageStyle from '@/src/components/units/main/components/youtubeImageStyle'
import ReactPlayer from 'react-player'

export default function YoutubeUI(props: YoutubeUIProps) {
  const categoryTitle = '유튜브'

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} moreButtonHidden={false} />
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

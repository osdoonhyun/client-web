import { Box, Image } from '@chakra-ui/react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export type UserBoardProps = {
  index: number
  boardId: string
  imageUrl: string
  isLiked: boolean
  toggleIsLiked: () => void
}

export default function UserBoard(props: UserBoardProps) {
  return (
    <Box key={props.index} pos="relative">
      <Image
        h="250px"
        width={'100%'}
        objectFit={'cover'}
        src={props.imageUrl ?? ''}
        bg="dGray"
        borderRadius="10px"
      />
      <Box
        pos="absolute"
        zIndex="2"
        top="88%"
        left="88%"
        _hover={
          props.isLiked
            ? undefined
            : {
                color: 'dGray.medium',
              }
        }
        color={props.isLiked ? 'dRed.400' : '#fff'}
        onClick={props.toggleIsLiked}>
        {props.isLiked ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
      </Box>
    </Box>
  )
}

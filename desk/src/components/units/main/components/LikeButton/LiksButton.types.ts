import { BoardItemProps } from '../../../user/components/boardItem'

export type LikeButtonProps = Omit<BoardItemProps, 'index' | 'imageUrl'>

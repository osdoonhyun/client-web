import CategoryHeaderUI from './CategoryHeader.presenter'
import { CategoryHeaderUIProps } from './CategoryHeader.types'

export default function CategoryHeader({
  categoryTitle,
  isMoreVisible,
}: CategoryHeaderUIProps) {
  return (
    <>
      <CategoryHeaderUI categoryTitle={categoryTitle} isMoreVisible={isMoreVisible} />
    </>
  )
}

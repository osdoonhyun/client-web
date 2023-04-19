import CategoryHeaderUI from './CategoryHeader.presenter'
import { CategoryHeaderUIProps } from './CategoryHeader.types'

export default function CategoryHeader({
  categoryTitle,
  moreButtonHidden,
}: CategoryHeaderUIProps) {
  return (
    <>
      <CategoryHeaderUI
        categoryTitle={categoryTitle}
        moreButtonHidden={moreButtonHidden}
      />
    </>
  )
}

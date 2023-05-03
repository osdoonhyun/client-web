import CategoryHeaderUI from './CategoryHeader.presenter'
import { CategoryHeaderUIProps } from './CategoryHeader.types'

export default function CategoryHeader({
  categoryTitle,
  moreButtonHidden,
  moreButtonLink,
}: CategoryHeaderUIProps) {
  return (
    <>
      <CategoryHeaderUI
        categoryTitle={categoryTitle}
        moreButtonHidden={moreButtonHidden}
        moreButtonLink={moreButtonLink}
      />
    </>
  )
}

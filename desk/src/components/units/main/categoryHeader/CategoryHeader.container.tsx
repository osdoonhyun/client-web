import CategoryHeaderUI from './CategoryHeader.presenter'
import { CategoryHeaderUIProps } from './CategoryHeader.types'

export default function CategoryHeader(props: CategoryHeaderUIProps) {
  return (
    <>
      <CategoryHeaderUI
        categoryTitle={props.categoryTitle}
        moreButtonHidden={props.moreButtonHidden}
      />
    </>
  )
}

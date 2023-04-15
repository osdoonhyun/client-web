import CategoryHeaderUI from './CategoryHeader.presenter'

export default function CategoryHeader({ categoryTitle }: { categoryTitle: string }) {
  return (
    <>
      <CategoryHeaderUI categoryTitle={categoryTitle} />
    </>
  )
}

import { ReactNode } from 'react'

export type CategoryHeaderUIProps = {
  categoryTitle: string | ReactNode
  moreButtonHidden: boolean
  moreButtonLink?: string
}

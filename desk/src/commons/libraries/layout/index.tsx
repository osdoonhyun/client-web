import LayoutFooter from './footer/LayoutFooter.container'
import LayoutHeader from './header/LayoutHeader.container'

export const maxWidth = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

export default function Layout() {
  return (
    <>
      <LayoutHeader />
      <LayoutFooter />
    </>
  )
}

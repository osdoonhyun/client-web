import LayoutFooter from './footer/LayoutFooter.container'
import LayoutHeader from './header/LayoutHeader.container'

type LayoutProps = {
  children: JSX.Element
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <LayoutHeader />
      <div style={{ height: '1080px' }}>{props.children}</div>
      <LayoutFooter />
    </>
  )
}

import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import ApolloSetting from 'src/commons/libraries/apollo'
import ChakraUISetting from 'src/commons/libraries/chakraUI'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <ChakraUISetting>
          <Component {...pageProps} />
        </ChakraUISetting>
      </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp

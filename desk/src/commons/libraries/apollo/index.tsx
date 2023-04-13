import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { ReactNode } from 'react'

type ApolloSettingProps = {
  children: ReactNode
}

const cache = new InMemoryCache()

export default function ApolloSetting(props: ApolloSettingProps) {
  const uploadLink = createUploadLink({
    uri: '',
    headers: {},
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache,
    connectToDevTools: true,
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

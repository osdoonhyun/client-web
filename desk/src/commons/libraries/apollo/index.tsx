import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { ReactNode } from 'react'
import {useRecoilState} from "recoil";
import {MyToken} from "@/src/commons/store/atom";

type ApolloSettingProps = {
  children: ReactNode
}

const cache = new InMemoryCache()

export default function ApolloSetting(props: ApolloSettingProps) {
  const [myToken, setMyToken] = useRecoilState(MyToken)
  
  const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_APOLLO_URI,
    headers: {Authorization: `Bearer ${myToken}`},
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache,
    connectToDevTools: true,
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

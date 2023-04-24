import {ApolloClient, ApolloLink, ApolloProvider, InMemoryCache} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { ReactNode } from 'react'
import {useRecoilState} from "recoil";
import {MyToken} from "@/src/commons/store/atom";

type ApolloSettingProps = {
  children: ReactNode
}

const cache = new InMemoryCache()

export default function ApolloSetting(props: ApolloSettingProps) {
  const [myToken, _] = useRecoilState(MyToken)
  
  // 일반토큰 에러처리 로직 구현중
  // const errorLink = onError(({ graphQLErrors, operation, forward}) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         return fromPromise(
  //           getAccessToken().then((newAccessToken) => {
  //             setMyToken(newAccessToken)
  //
  //             if (typeof newAccessToken !== "string") return
  //             operation.setContext({
  //               headers: {
  //                 ...operation.getContext().headers,
  //                 Authorization: `Bearer ${newAccessToken || ''}`,
  //               }
  //             })
  //           })
  //         ).flatMap(() => forward(operation))
  //
  //       }
  //     }
  //   }
  // })
  
  const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_APOLLO_URI,
    headers: {Authorization: `Bearer ${myToken}`},
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // 일반토큰 에러처리 로직 구현중
    // link: ApolloLink.from([errorLink, uploadLink]),
    cache,
    connectToDevTools: true,
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

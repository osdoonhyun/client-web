import {ApolloClient, ApolloLink, ApolloProvider, InMemoryCache} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import {ReactNode, useEffect} from 'react'
import {useRecoilState} from "recoil";
import {MyToken} from "@/src/commons/store/atom";
import { Cookies } from "react-cookie"
const cookies = new Cookies()

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
  
  useEffect(() => {
    const refreshToken = cookies.get('refreshToken')
    console.log(refreshToken)
 
    if (refreshToken) {
      console.log('checkRefreshToken')
      
      // refreshToken 값이 있는 경우
      // 새로운 accessToken 발급 또는 로그인 유지 로직을 수행할 수 있습니다.
      // ...
    } else {
      console.log('없다.')
      // refreshToken 값이 없는 경우
      // 로그인 페이지로 이동 또는 다른 처리를 수행할 수 있습니다.
      // ...
    }
  }, [])
  
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

import { MyToken } from '@/src/commons/store/atom'
import { updateAccessToken } from '@/src/components/units/auth/updateAccessToken'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { ReactNode, useEffect } from 'react'
import { useRecoilState } from 'recoil'

type ApolloSettingProps = {
  children: ReactNode
}

const cache = new InMemoryCache()

export default function ApolloSetting(props: ApolloSettingProps) {
  const [myToken, setMyToken] = useRecoilState(MyToken)

  useEffect(() => {
    void updateAccessToken().then(newAccessToken => {
      setMyToken(newAccessToken)
    })
  }, [])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'GRAPHQL_VALIDATION_FAILED') {
          return fromPromise(
            updateAccessToken()
              .then(newAccessToken => {
                setMyToken(newAccessToken)
                operation.setContext({
                  headers: {
                    ...operation.getContext().headers,
                    Authorization: `Bearer ${newAccessToken}`,
                  },
                })
              })
              .catch(() => {
                console.log('리프레시 토큰 에러입니다.')
                setMyToken('')
              }),
          ).flatMap(() => forward(operation))
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_APOLLO_URI,
    headers: { Authorization: `Bearer ${myToken}` },
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache,
    connectToDevTools: true,
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

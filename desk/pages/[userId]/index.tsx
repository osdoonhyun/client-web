import { TQuery } from '@/src/commons/types/generated/types'
import User from '@/src/components/units/user/User.container'
import { FETCH_USER } from '@/src/components/units/user/User.queries'
import { GraphQLClient } from 'graphql-request'
import { GetServerSideProps } from 'next'

type UserPageProps = {
  userData: Pick<TQuery, 'fetchUser'>
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async ({
  query,
}) => {
  const { userId } = query
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_APOLLO_URI ?? '', {
    credentials: 'include',
  })

  const result = await graphQLClient.request<Pick<TQuery, 'fetchUser'>>(FETCH_USER, {
    userid: userId as string,
  })

  return {
    props: {
      userData: result,
    },
  }
}

export default function UserPage(props: UserPageProps) {
  const userData = props.userData.fetchUser

  return <User userData={userData} />
}

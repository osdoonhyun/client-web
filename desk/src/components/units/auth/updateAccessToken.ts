import { GraphQLClient } from 'graphql-request'
import { RESTORE_ACCESS_TOKEN } from './queries/mutation'

export const updateAccessToken = async () => {
  try {
    const endPoint = process.env.NEXT_PUBLIC_APOLLO_URI as string
    const client = new GraphQLClient(endPoint, { credentials: 'include' })
    const result: any = await client.request(RESTORE_ACCESS_TOKEN)
    const newAccessToken = result.restoreAccessToken
    return newAccessToken
  } catch (error) {
    console.log('# Update AccessToken :', (error as Error).message)
  }
}

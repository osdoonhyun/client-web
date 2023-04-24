import {GraphQLClient, gql} from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
        restoreAccessToken {
            accessToken
        }
    }`

export const getAccessToken = async () => {
	try {
		const graphQLClient = new GraphQLClient(
			process.env.NEXT_PUBLIC_APOLLO_URI ?? '',
			{ credentials: "include" }
		)
		const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN) as any
		console.log("result.restoreAccessToken.accessToken")
		console.log(result.restoreAccessToken.accessToken)
		return result.restoreAccessToken.accessToken
	} catch (error) {
		if (error instanceof Error) console.log(error.message)
	}
}
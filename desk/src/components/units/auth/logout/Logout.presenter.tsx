import {Grid, Wrap} from "@chakra-ui/react";
import LogoutForm from "@/src/components/units/auth/logout/components/LogoutForm";

export default function LogoutUI() {
	return (
		<Wrap>
			<Grid w={'100%'}>
				<LogoutForm />
			</Grid>
		</Wrap>
	)
}
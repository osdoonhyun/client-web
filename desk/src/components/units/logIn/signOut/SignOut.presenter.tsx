import {Grid, Wrap} from "@chakra-ui/react";
import LogOutForm from "./atoms/LogOutForm";

export default function SignOutUi() {
	return (
		<Wrap>
			<Grid w={'100%'}>
				<LogOutForm />
			</Grid>
		</Wrap>
	)
}
import React from "react";
import {NextRouter} from "next/router";

export default function OnClickBtLink(e: React.MouseEvent, router: NextRouter) {
	if ((e.currentTarget as HTMLButtonElement).name === 'buttonJoinMember') {
		return void router.push('/auth/signup')
	} else if ((e.currentTarget as HTMLButtonElement).id === 'deca') {
		return void router.push('/')
	} else if ((e.currentTarget as HTMLButtonElement).id === 'linkLogIn') {
		return void router.push('/auth/login')
	}
}
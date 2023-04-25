import * as yup from "yup";

export type errMsg = {
	errText: string,
	errColor: string,
	isEmail: boolean,
	verificationText: string,
	verificationColor: string,
	isVerified: boolean,
	isSubmitButton: boolean,
	myPassword: string
}

export const LoginSchema = yup
	.object({
		email: yup
			.string()
			.required('필수 입력값 입니다.')
			.email('이메일 형식으로만 입력이 가능합니다.'),
		password: yup
			.string()
			.required('필수 입력값 입니다.')
			.min(6, '비밀번호는 6자리 이상이어야 합니다.')
			.max(13, '비밀번호는 13자리 이하여야 합니다.'),
	})

export type AuthFormProps = {
	email: string
	password: string
}

export type MyJob = {
	myJob: string
	setMyJob: (myJob: string) => void
}

const ErrorLog = {
	NOT_EMAIL: "올바르지 않은 이메일 형식입니다.",
	ALREADY_USED_EMAIL: "이미 사용중인 이메일입니다.",
	NOT_JOINED_MEMBER: "등록되지 않은 회원 입니다.",
	NOT_MATCH_PASSWORD: "비밀번호가 일치하지 않습니다."
}
Object.freeze(ErrorLog)

export function errorMessage(err: string) {
	if (err.includes('올바르지 않은')) {
		return ErrorLog.NOT_EMAIL
	} else if (err.includes('이미 사용중인')) {
		return ErrorLog.ALREADY_USED_EMAIL
	} else if (err.includes('등록되지 않은')) {
		return ErrorLog.NOT_JOINED_MEMBER
	} else if (err.includes('비밀번호가 일치')) {
		return ErrorLog.NOT_MATCH_PASSWORD
	}
}
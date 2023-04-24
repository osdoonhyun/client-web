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
			.max(13, '비밀번호는 13자리 이하여야 합니다.')
	})

export type AuthFormProps = {
	email: string
	password: string
}

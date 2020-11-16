import * as Yup from "yup";
import PayRentFormModel from "./formModel";

const {
	formField: {
		fullName,
		phoneNumber,
		email,
		state,
		landLordName,
		landLordNumber,
		ifsc,
		accountNumber,
	},
} = PayRentFormModel;

export default [
	Yup.object().shape({
		[fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
		[phoneNumber.name]: Yup.string().required(
			`${phoneNumber.requiredErrorMsg}`
		),
		[email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
		[state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[landLordName.name]: Yup.string().required(
			`${landLordName.requiredErrorMsg}`
		),
		[landLordNumber.name]: Yup.string().required(
			`${landLordNumber.requiredErrorMsg}`
		),
		[ifsc.name]: Yup.string().required(`${ifsc.requiredErrorMsg}`),
		[accountNumber.name]: Yup.string().required(
			`${accountNumber.requiredErrorMsg}`
		),
	}),
];

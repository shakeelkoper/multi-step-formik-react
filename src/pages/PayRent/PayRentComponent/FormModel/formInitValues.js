import PayRentFormModel from "./formModel";
const {
	formField: {
		fullName,
		phoneNumber,
		email,
		state,
		city,
		landLordName,
		landLordNumber,
		ifsc,
		accountNumber,
	},
} = PayRentFormModel;

export default {
	[fullName.name]: "",
	[phoneNumber.name]: "",
	[email.name]: "",
	[state.name]: "",
	[city.name]: "",
	[landLordName.name]: "",
	[landLordNumber.name]: "",
	[ifsc.name]: "",
	[accountNumber.name]: "",
};

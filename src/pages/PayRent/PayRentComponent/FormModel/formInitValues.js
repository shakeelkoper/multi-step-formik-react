import PayRentFormModel from "./formModel";
const {
	formField: {
		fullName,
		phoneNumber,
		email,
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
	[landLordName.name]: "",
	[landLordNumber.name]: "",
	[ifsc.name]: "",
	[accountNumber.name]: "",
};

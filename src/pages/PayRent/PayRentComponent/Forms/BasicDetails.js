import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
	InputField,
	Select,
	RadioButtonsGroup,
} from "../../../../common/components/FormFields";
const BasicDetails = (props) => {
	const {
		formField: { fullName, phoneNumber, email, state, city },
	} = props;
	const radioConf = {
		formLabel: "Gender",
		ariaLabel: "gender",
		groupName: "gender",
		options: [
			{
				value: "female",
				label: "Female",
			},
			{
				value: "male",
				label: "Male",
			},
		],
	};

	return (
		<React.Fragment>
			<Typography variant="h2" gutterBottom>
				Basic Details
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={12}>
					<InputField
						type="text"
						name={fullName.name}
						label={fullName.label}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<InputField
						type="number"
						name={phoneNumber.name}
						label={phoneNumber.label}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<InputField
						type="email"
						name={email.name}
						label={email.label}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<Select name={state.name} label={state.label} />
				</Grid>
				<Grid item xs={12} md={12}>
					<InputField
						type="text"
						name={city.name}
						label={city.label}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<RadioButtonsGroup radioConf={radioConf} />
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default BasicDetails;

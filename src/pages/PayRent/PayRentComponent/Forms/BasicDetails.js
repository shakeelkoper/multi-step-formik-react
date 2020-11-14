import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../../../common/components/FormFields";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { states } from "../../../../common/components/stateList";

const BasicDetails = (props) => {
	const {
		formField: { fullName, phoneNumber, email },
	} = props;
	const defaultProps = {
		options: states,
		getOptionLabel: (option) => option.title,
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
					<Autocomplete
						{...defaultProps}
						id="clear-on-escape"
						clearOnEscape
						renderInput={(params) => (
							<TextField
								{...params}
								label="State where property is located"
								margin="normal"
							/>
						)}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default BasicDetails;

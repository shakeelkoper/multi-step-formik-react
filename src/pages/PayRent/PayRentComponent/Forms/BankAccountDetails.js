import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../../../common/components/FormFields";

const BankAccountDetails = (props) => {
	const {
		formField: { landLordName, landLordNumber, ifsc, accountNumber },
	} = props;
	return (
		<React.Fragment>
			<Typography variant="h2" gutterBottom>
				Landlord Details
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={12}>
					<InputField
						type="text"
						name={landLordName.name}
						label={landLordName.label}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<InputField
						type="number"
						name={landLordNumber.name}
						label={landLordNumber.label}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<InputField
						type="number"
						name={ifsc.name}
						label={ifsc.label}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<InputField
						type="number"
						name={accountNumber.name}
						label={accountNumber.label}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default BankAccountDetails;

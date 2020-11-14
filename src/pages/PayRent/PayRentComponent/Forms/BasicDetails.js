import React from "react";
import { H2 } from "ui-neumorphism";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../../../common/components/FormFields";
import { useForm } from "react-hook-form";

const BasicDetails = (props) => {
	const {
		formField: { fullName, phoneNumber, email },
	} = props;
	const { register} = useForm();
	return (
		<React.Fragment>
			<H2>Basic Details</H2>
			<div className="row">
				<div className="col-xs-12">
					<InputField
						type="text"
						name={fullName.name}
						label={fullName.label}
						ref={register}
					/>
				</div>
				<div className="col-xs-12">
					<InputField
						type="number"
						name={phoneNumber.name}
						label={phoneNumber.label}
						ref={register}
					/>
				</div>
				<Grid item xs={12} md={12}>
					<InputField
						type="email"
						name={email.name}
						label={email.label}
						ref={register}
					/>
				</Grid>
			</div>
		</React.Fragment>
	);
};

export default BasicDetails;

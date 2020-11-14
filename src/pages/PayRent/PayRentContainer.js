import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import Stepper from "./PayRentComponent/Stepper/Stepper";
import BasicDetails from "./PayRentComponent/Forms/BasicDetails";
import BankAccountDetails from "./PayRentComponent/Forms/BankAccountDetails";

import validationSchema from "./PayRentComponent/FormModel/validationSchema";
import checkoutFormModel from "./PayRentComponent/FormModel/formModel";
import formInitialValues from "./PayRentComponent/FormModel/formInitValues";

const { formId, formField } = checkoutFormModel;
const steps = [
	"Basic Details",
	"Landlord details",
	"Tenant Details",
	"Property Details",
	"Contract Details",
];

const PayRentContainer = () => {
	const [activeStep, setActiveStep] = useState(0);
	const currentValidationSchema = validationSchema[activeStep];
	const isLastStep = activeStep === steps.length - 1;

	// async function _submitForm(values, actions) {
	// 	await _sleep(1000);
	// 	alert(JSON.stringify(values, null, 2));
	// 	actions.setSubmitting(false);

	// 	setActiveStep(activeStep + 1);
	//   }

	useEffect(() => {
		console.log("SetState", activeStep);
	}, [activeStep]);

	function _handleSubmit(values, actions) {
		if (isLastStep) {
			console.log("This is Last Step");
			//   _submitForm(values, actions);
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	}
	function _handleBack() {
		setActiveStep(activeStep - 1);
	}

	const stepperClicked = (selectedIndex) => {
		console.log("Stepper Clicked", selectedIndex);
		setActiveStep(selectedIndex);
	};

	const _renderStepContent = (step) => {
		switch (step) {
			case 0:
				return <BasicDetails formField={formField} />;
			case 1:
				return <BankAccountDetails formField={formField} />;
			// case 2:
			// 	return <ReviewOrder />;
			default:
				return <div>Not Found</div>;
		}
	};

	return (
		<Grid container>
			<Grid item xs={12} lg={4}>
				<Stepper currStep={activeStep} onClick={stepperClicked} />
			</Grid>
			<Grid item xs={12} lg={8}>
				<Formik
					initialValues={formInitialValues}
					validationSchema={currentValidationSchema}
					onSubmit={_handleSubmit}
				>
					<Form id={formId}>
						{_renderStepContent(activeStep)}
						<div>
							<Button
								variant="contained"
								color="primary"
								onClick={_handleBack}
							>
								Back
							</Button>
							<Button
								variant="contained"
								color="primary"
								type="submit"
							>
								Next
							</Button>
						</div>
					</Form>
				</Formik>
			</Grid>
		</Grid>
	);
};
export default PayRentContainer;

import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
import { at } from "lodash";

const InputField = (props) => {
	const { errorText, ...rest } = props;
	const [field, meta] = useField(props);

	function _renderHelperText() {
		const [touched, error] = at(meta, "touched", "error");
		if (touched && error) {
			return error;
		}
	}
	return (
		<TextField
			error={meta.touched && meta.error && true}
			helperText={_renderHelperText()}
			{...field}
			{...rest}
		/>
	);
};

export default InputField;

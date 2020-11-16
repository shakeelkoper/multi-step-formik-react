import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useField } from "formik";
import { at } from "lodash";
import { states } from "../../components/stateList";

const AutoComplete = (props) => {
	const { errorText, ...rest } = props;
	const [field, meta] = useField(props);
	const defaultProps = {
		options: states,
		getOptionLabel: (option) => option.title,
	};
	function _renderHelperText() {
		const [touched, error] = at(meta, "touched", "error");
		if (touched && error) {
			return error;
		}
	}
	return (
		<Autocomplete
			{...defaultProps}
			clearOnEscape
			renderInput={(params) => (
				<TextField
					error={meta.touched && meta.error && true}
					helperText={_renderHelperText()}
					{...field}
					{...rest}
					{...params}
					margin="normal"
				/>
			)}
		/>
	);
};

export default AutoComplete;

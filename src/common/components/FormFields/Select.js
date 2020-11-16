import React from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { states } from "../../components/stateList";
import { useField } from "formik";
import { at } from "lodash";

const SelectField = (props) => {
	const { errorText, ...rest } = props;
	const [field, meta] = useField(props);
	const [state, setState] = React.useState("");
	const handleChange = (event) => {
		setState(event.target.value);
	};
	function _renderHelperText() {
		const [touched, error] = at(meta, "touched", "error");
		if (touched && error) {
			return error;
		}
	}

	return (
		<FormControl error={meta.touched && meta.error && true}>
			<InputLabel id="select-label">{props.label}</InputLabel>
			<Select
				labelId="select-label"
				id="state-select"
				value={state}
				onChange={handleChange}
				name={props.name}
				helperText={_renderHelperText()}
				{...field}
				{...rest}
			>
				{states.map((item, keyIndex) => {
					return (
						<MenuItem value={item.code} key={keyIndex}>
							{item.title}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default SelectField;

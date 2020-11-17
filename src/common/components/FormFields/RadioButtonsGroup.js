import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const RadioButtonsGroup = (props) => {
	const [value, setValue] = React.useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const optionsList = props.radioConf.options;

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">
				{props.radioConf.formLabel}
			</FormLabel>
			<RadioGroup
				aria-label={props.radioConf.ariaLabel}
				name={props.radioConf.groupName}
				value={value}
				onChange={handleChange}
			>
				{optionsList.map((item, keyIndex) => {
					return (
						<FormControlLabel
							key={keyIndex}
							value={item.value}
							control={<Radio />}
							label={item.label}
						/>
					);
				})}
			</RadioGroup>
		</FormControl>
	);
};

// https://codesandbox.io/s/gracious-williamson-pd64p?file=/src/index.js

export default RadioButtonsGroup;

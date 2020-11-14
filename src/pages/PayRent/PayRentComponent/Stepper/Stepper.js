import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FolderIcon from "@material-ui/icons/Folder";

const Stepper = (props) => {
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const steps = [
		"Basic Details",
		"Landlord details",
		"Tenant Details",
		"Property Details",
		"Contract Details",
	];

	useEffect(() => {
		console.log("Props", props.currStep);
		setSelectedIndex(props.currStep);
	}, [props.currStep]);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
		props.onClick(index);
	};

	return (
		<React.Fragment>
			<Typography variant="h2" gutterBottom>
				Pay a Rent
			</Typography>
			<div className="">
				<List dense={true}>
					{steps.map((item, index) => (
						<ListItem
							selected={selectedIndex === index}
							key={index}
							onClick={(event) =>
								handleListItemClick(event, index)
							}
						>
							<ListItemIcon>
								<FolderIcon />
							</ListItemIcon>
							<ListItemText
								primary={item}
								secondary={"Secondary text"}
							/>
						</ListItem>
					))}
				</List>
			</div>
		</React.Fragment>
	);
};

export default Stepper;

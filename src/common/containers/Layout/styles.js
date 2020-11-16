import {
	createMuiTheme,
	responsiveFontSizes,
	makeStyles,
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
let theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: blue,
	},
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
	root: {
		width: "auto",
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
	},
	paper: {
		backgroundColor: theme.palette.background.default,
		// padding: theme.spacing(2),
	},
}));

export { theme, useStyle };

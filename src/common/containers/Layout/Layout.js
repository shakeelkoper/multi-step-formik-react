import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { theme, useStyle } from "./styles";
const Layout = (props) => {
	const { children } = props;
	const classes = useStyle();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={classes.root}>{children}</div>
		</ThemeProvider>
	);
};

export default Layout;

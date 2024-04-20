import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
	palette: {
		primary: {
			main: "#065af3",
			dark: "#065af3",
		},
		// secondary: {
		// 	main: "rgba(0, 0, 0, 0.87)",
		// },
		secondary: {
			main: "#065af3",
			light: "rgba(0, 0, 0, 0.87)",
			hover: "#065af3",
		},
		tabcolor: {
			main: "#0770e4",
			light: "rgba(0, 0, 0, 0.87)",
		},
	},
	typography: { fontFamily: `"Open Sans", Helvetica, Arial, sans-serif` },
});

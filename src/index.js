import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    fontFamily: ["DM Sans", "Roboto", "Exo", "sans-serif", "Gayathri"].join(
      ","
    ),
    b1: {
      fontWeight: 400,
      fontSize: "0.5rem",
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffa726",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#24C3D9",
    },
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Exo';
        }
      `,
    },
  },
});
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

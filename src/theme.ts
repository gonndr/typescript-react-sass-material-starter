import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiStepContent: {
      styleOverrides: {
        root: {
          borderColor: "#80411e",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: "#80411e",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#37251b",
    },
    secondary: {
      main: "#ad6d2f",
    },
    background: { paper: "#8f755f", default: "#d2c1b0" },
    divider: "#80411e",
    error: {
      main: red.A400,
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#145aee",
      contrastText: "#e2f2ff",
    },
    secondary: {
      main: "#e2f2ff",
      contrastText: "#e2f2ff",
    },
    background: { paper: "#e2f2ff", default: "#FFFFFF" },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

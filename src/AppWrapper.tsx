import React, { FC } from "react";
import App from "@components/App/App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import theme from "./theme";
import store from "@state/store";

const AppWrapper: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  );
};

export default AppWrapper;

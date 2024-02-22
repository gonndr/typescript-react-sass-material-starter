import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Alert, Backdrop, CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";
import TitleBar from "./TitleBar/TitleBar";
import SideBar from "./SideBar/SideBar";
import { getDataRequest } from "@state/api/actions";
import { useAppDispatch } from "@state/store";
import { selectApiState } from "@state/selectors";

const PermanentDrawer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useSelector(selectApiState);

  useEffect(() => {
    dispatch(getDataRequest());
  }, []);

  const renderLoadingOverlay = () => (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );

  const renderContent = () => (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        overflowY: "scroll",
      }}
    >
      <Toolbar />
      {isError ? (
        <Alert severity="error">Something went wrong. Please try again</Alert>
      ) : (
        <Outlet />
      )}
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} component="nav">
      {renderLoadingOverlay()}
      <TitleBar />
      <SideBar />
      {renderContent()}
    </Box>
  );
};

export default PermanentDrawer;

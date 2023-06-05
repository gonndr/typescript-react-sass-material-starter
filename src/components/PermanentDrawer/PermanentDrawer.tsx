import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { RootState } from "@state/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRequest } from "@state/actions";
import { Alert, Backdrop, CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";
import TitleBar from "./TitleBar/TitleBar";
import SideBar from "./SideBar/SideBar";

const PermanentDrawer = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getRequest());
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

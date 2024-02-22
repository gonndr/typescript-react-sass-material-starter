import React from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { drawerWidth } from "../muiStylingConfig";
import { selectSelectedOption } from "@state/selectors";

const TitleBar = (): JSX.Element => {
  const selectedOption = useSelector(selectSelectedOption);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
      data-testid={"titlebar"}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {selectedOption && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ width: "10%" }}
            >
              {selectedOption}
            </Typography>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;

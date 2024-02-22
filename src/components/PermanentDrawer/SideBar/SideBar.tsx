import React from "react";
import { Divider, Drawer, List, Toolbar } from "@mui/material";
import { Article } from "@mui/icons-material";
import { RootState } from "@state/reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectOption } from "@state/actions";
import { sortList } from "@utils/helpers";
import SideBarListItem from "./SideBarListItem";
import { drawerWidth } from "../muiStylingConfig";
import { selectAllData, selectSelectedOption } from "@state/selectors";

const SideBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(selectSelectedOption);
  const allData = useSelector(selectAllData);
  const options = allData.map(({ name }) => name);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List disablePadding data-testid={"sidebar"}>
        {sortList(options).map((name) => (
          <SideBarListItem
            path={`/${name}`}
            selected={name === selectedOption}
            key={name}
            icon={<Article />}
            text={name}
            onClick={() => dispatch(selectOption(name))}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

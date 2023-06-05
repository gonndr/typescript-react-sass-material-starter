import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const SideBarListItem = ({
  icon,
  text,
  selected = false,
  onClick,
  path,
}: {
  icon: JSX.Element;
  text: string;
  selected?: boolean;
  onClick?: () => void;
  path: string;
}): JSX.Element => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        role={"button"}
        component={Link}
        to={path}
        selected={selected}
        onClick={onClick}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarListItem;

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ButtonBase, Chip } from "@mui/material";
import { AvailableOptionName } from "@utils/types";
import { useDispatch } from "react-redux";
import { selectOption } from "@state/actions";
import { formatPriceValue } from "@utils/helpers";

const OptionCard = ({
  name,
  children,
}: {
  name: AvailableOptionName;
  children: React.ReactNode;
}): JSX.Element => {
  const [optionPrice] = useState(Math.random() * 10);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      focusRipple
      sx={{ textAlign: "left" }}
      onClick={() => dispatch(selectOption(name))}
    >
      <Card sx={{ width: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ minHeight: 100 }}
            variant="body2"
            color="text.secondary"
          >
            {children}
          </Typography>
        </CardContent>

        <CardContent sx={{ padding: "16px" }}>
          <Chip
            sx={{ padding: "4px" }}
            color="primary"
            label={`From £ ${formatPriceValue(optionPrice)}`}
          />
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default OptionCard;

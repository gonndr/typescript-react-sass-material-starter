import React from "react";

import { availableOptions } from "@utils/constants";
import OptionCard from "./OptionCard/OptionCard";
import { Grid } from "@mui/material";
const SelectionStepContent = (): JSX.Element => {
  return (
    <Grid container spacing={2} justifyContent="space-between">
      {availableOptions.map(({ name, description }, index) => (
        <Grid item key={index}>
          <OptionCard name={name}>{description}</OptionCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default SelectionStepContent;

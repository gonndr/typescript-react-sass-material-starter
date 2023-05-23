import React from "react";
import { RootState } from "@state/reducer";
import { useSelector } from "react-redux";
import SelectionStepContent from "./SelectionStepContent";

const SelectionStepFactory = ({ type }: { type: string }): JSX.Element => {
  const activeStep = useSelector(({ activeStep }: RootState) => activeStep);
  switch (type) {
    case "selection":
    default:
      return <SelectionStepContent />;
    case "customisation":
      return <div>Customise UI</div>;
    case "checkout":
      return <div>Review and checkout UI</div>;
  }
};

export default SelectionStepFactory;

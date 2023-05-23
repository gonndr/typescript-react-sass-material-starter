import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { RootState } from "@state/reducer";
import { useDispatch, useSelector } from "react-redux";
import { goFirstStep, goToNextStep, goToPreviousStep } from "@state/actions";
import SelectionStepFactory from "./SelectionStepFactory";

const steps = [
  {
    label: "Select Your Option",
    type: "selection",
  },
  {
    label: "Customise Your Option",
    type: "customisation",
  },
  {
    label: "Review And Checkout",
    type: "checkout",
  },
];

const SelectionStepper = (): JSX.Element => {
  const dispatch = useDispatch();
  const { activeStep, selectedOptionName } = useSelector(
    (state: RootState) => state
  );

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, type }, index) => (
          <Step key={label}>
            <StepLabel>
              <h1>
                {!!selectedOptionName && index === 0
                  ? `Selected: ${selectedOptionName}`
                  : label}
              </h1>
            </StepLabel>
            <StepContent>
              {<SelectionStepFactory type={type} />}

              {index !== 0 && (
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => dispatch(goToNextStep())}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Checkout" : "Continue"}
                    </Button>

                    <Button
                      onClick={() => dispatch(goToPreviousStep())}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            Checkout successful! Enjoy your {selectedOptionName}
          </Typography>
          <Button onClick={() => dispatch(goFirstStep())} sx={{ mt: 1, mr: 1 }}>
            Restart
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default SelectionStepper;

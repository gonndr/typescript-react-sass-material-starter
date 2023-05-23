import React, { FC } from "react";
import "@components/App/App.sass";
import { Container } from "@mui/material";
import SelectionStepper from "@components/Coffee/SelectionStepper";

const App: FC = () => {
  return (
    <Container maxWidth="lg">
      <h1 className="title">Hey there!</h1>
      <SelectionStepper />
    </Container>
  );
};

export default App;

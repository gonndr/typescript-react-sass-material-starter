import React, { FC } from "react";
import "@components/App/App.sass";
import ToastNotification from "@components/ToastNotification";
import PermanentDrawer from "@components/PermanentDrawer/PermanentDrawer";

const App: FC = () => {
  return (
    <>
      <ToastNotification />
      <PermanentDrawer />
    </>
  );
};

export default App;

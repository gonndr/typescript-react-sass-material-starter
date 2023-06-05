import { Snackbar, Alert } from "@mui/material";
import { fireNotification } from "@state/actions";
import { RootState } from "@state/reducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToastNotification = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {
    notification: { type, message },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    message && setIsOpen(true);
  }, [message]);

  const onNotificationClose = () => {
    setIsOpen(false);
  };

  const onNotificationExit = () => {
    dispatch(fireNotification({ message: "" }));
  };

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={onNotificationClose}
      TransitionProps={{ onExited: onNotificationExit }}
    >
      <Alert
        onClose={onNotificationClose}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;

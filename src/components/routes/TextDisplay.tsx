import { Typography } from "@mui/material";
import { selectOption } from "@state/actions";
import { RootState } from "@state/reducer";
import { getOptionByName } from "@utils/helpers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TextDisplay = (): JSX.Element => {
  const dispatch = useDispatch();
  const { optionPath } = useParams();
  const { selectedOption, allData } = useSelector((state: RootState) => state);

  const displayData = getOptionByName({
    allData,
    name: selectedOption,
  })?.data;

  useEffect(() => {
    if (!selectedOption) {
      dispatch(selectOption(optionPath as string));
    }
  }, [selectedOption]);

  return <Typography children={displayData} />;
};

export default TextDisplay;

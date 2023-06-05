import { OptionData } from "@utils/types";
import { AllData } from "./types";

export const sortList = (list: string[]) =>
  [...list].sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

export const getOptionByName = ({
  allData,
  name,
}: {
  allData: AllData;
  name: string;
}) => allData.find((option) => option.name === name);

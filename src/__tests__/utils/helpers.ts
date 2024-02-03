import { act, screen } from "@testing-library/react";
import {} from "@utils/helpers";
import userEvent from "@testing-library/user-event";
import { AllData } from "@utils/types";
import chance from "./chance.test";

const user = userEvent.setup({ pointerEventsCheck: 0 });

export const userClick = async (element: HTMLElement) =>
  await act(async () => await user.click(element));
export const userType = async ({
  element,
  text,
}: {
  element: HTMLElement;
  text: string;
}) => await act(async () => await user.type(element, text));

export const findButtonByName = (name: string) =>
  screen.findByRole("button", { name });
export const getButtonByName = (name: string) =>
  screen.getByRole("button", { name });
export const queryButtonByName = (name: string) =>
  screen.queryByRole("button", { name });

// data generators

export const generateOptions = (
  amount = chance.natural({ min: 1, max: 6 })
): AllData =>
  chance.n(() => ({ name: chance.word(), data: chance.string() }), amount);

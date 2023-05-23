import React from "react";
import { render, screen } from "@testing-library/react";
import AppWrapper from "../AppWrapper";
describe("When app runs", () => {
  beforeEach(() => {
    render(<AppWrapper />);
  });
  it("displays welcome message", () => {
    expect(screen.getByText("Hey there!")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ModalCurrent from "./ModalCurrent";
import { getCurrentSeason } from "../utils/seasons";

describe(ModalCurrent.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 9));
  });
  it("renders a button with `Et après ?` label", () => {
    render(<ModalCurrent season={getCurrentSeason()} label="Et après ?" />);
    expect(
      screen.getByRole("button", { name: "Et après ?" })
    ).toBeInTheDocument();
  });
  it("renders a title `Winter`", () => {
    render(<ModalCurrent season={getCurrentSeason()} />);
    expect(screen.getByText("Winter")).toBeInTheDocument();
  });
  it("renders a text `49 days ago...`", () => {
    render(<ModalCurrent season={getCurrentSeason()} />);
    expect(screen.getByText("49 days ago...")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});

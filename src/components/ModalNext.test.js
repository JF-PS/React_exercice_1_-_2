import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ModalNext from "./ModalNext";
import { getNextSeason } from "../utils/seasons";

describe(ModalNext.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 9));
  });
  it("renders a button with `Ok, je vais être patient` label", () => {
    render(
      <ModalNext season={getNextSeason()} label="Ok, je vais être patient" />
    );
    expect(
      screen.getByRole("button", { name: "Ok, je vais être patient" })
    ).toBeInTheDocument();
  });
  it("renders a title `Spring (92 days)`", () => {
    render(<ModalNext season={getNextSeason()} />);
    expect(screen.getByText("Spring (92 days)")).toBeInTheDocument();
  });
  it("renders a text `in 38 days...`", () => {
    render(<ModalNext season={getNextSeason()} />);
    expect(screen.getByText("in 38 days...")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});

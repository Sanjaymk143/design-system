import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders spinner", () => {
    render(<Spinner />);

    expect(
      screen.getByRole("status")
    ).toBeInTheDocument();
  });

  it("uses loading label", () => {
    render(<Spinner />);

    expect(
      screen.getByLabelText(
        "Loading"
      )
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(
      <Spinner
        className="custom-spinner"
      />
    );

    expect(
      screen.getByRole("status")
    ).toHaveClass(
      "custom-spinner"
    );
  });

  it("forwards native props", () => {
    render(
      <Spinner
        data-testid="spinner"
      />
    );

    expect(
      screen.getByTestId(
        "spinner"
      )
    ).toBeInTheDocument();
  });
});
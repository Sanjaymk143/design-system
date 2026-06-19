import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Label } from "./Label";

describe("Label", () => {
  it("renders label text", () => {
    render(
      <Label>
        Email Address
      </Label>
    );

    expect(
      screen.getByText(
        "Email Address"
      )
    ).toBeInTheDocument();
  });

  it("renders required indicator", () => {
    render(
      <Label required>
        Email Address
      </Label>
    );

    expect(
      screen.getByText("*")
    ).toBeInTheDocument();
  });

  it("does not render required indicator by default", () => {
    render(
      <Label>
        Email Address
      </Label>
    );

    expect(
      screen.queryByText("*")
    ).not.toBeInTheDocument();
  });

  it("forwards htmlFor attribute", () => {
    render(
      <Label htmlFor="email">
        Email Address
      </Label>
    );

    const label =
      screen.getByText(
        "Email Address"
      );

    expect(label).toHaveAttribute(
      "for",
      "email"
    );
  });

  it("forwards native label props", () => {
    render(
      <Label
        data-testid="label"
      >
        Email Address
      </Label>
    );

    expect(
      screen.getByTestId(
        "label"
      )
    ).toBeInTheDocument();
  });

  it("renders disabled label text", () => {
    render(
      <Label disabled>
        Disabled Label
      </Label>
    );

    expect(
      screen.getByText(
        "Disabled Label"
      )
    ).toBeInTheDocument();
  });
});
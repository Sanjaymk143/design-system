import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(
      <Badge>
        Active
      </Badge>
    );

    expect(
      screen.getByText("Active")
    ).toBeInTheDocument();
  });

  it("renders success variant", () => {
    render(
      <Badge variant="success">
        Active
      </Badge>
    );

    expect(
      screen.getByText("Active")
    ).toBeInTheDocument();
  });

  it("forwards native span props", () => {
    render(
      <Badge data-testid="badge">
        Active
      </Badge>
    );

    expect(
      screen.getByTestId("badge")
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(
      <Badge className="custom-badge">
        Active
      </Badge>
    );

    expect(
      screen.getByText("Active")
    ).toHaveClass(
      "custom-badge"
    );
  });
});
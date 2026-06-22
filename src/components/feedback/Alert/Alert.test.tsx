import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders content", () => {
    render(
      <Alert>
        Alert message
      </Alert>
    );

    expect(
      screen.getByText(
        "Alert message"
      )
    ).toBeInTheDocument();
  });

  it("renders title", () => {
    render(
      <Alert title="Success">
        Alert message
      </Alert>
    );

    expect(
      screen.getByText("Success")
    ).toBeInTheDocument();
  });

  it("uses alert role", () => {
    render(
      <Alert>
        Alert message
      </Alert>
    );

    expect(
      screen.getByRole("alert")
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(
      <Alert
        className="custom-alert"
      >
        Alert message
      </Alert>
    );

    expect(
      screen.getByRole("alert")
    ).toHaveClass(
      "custom-alert"
    );
  });

  it("forwards native props", () => {
    render(
      <Alert
        data-testid="alert"
      >
        Alert message
      </Alert>
    );

    expect(
      screen.getByTestId("alert")
    ).toBeInTheDocument();
  });
});
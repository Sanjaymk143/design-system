import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(
      <Button>
        Click Me
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveTextContent("Click Me");
  });
  
  it("renders loading state", () => {
    render(
        <Button loading>
            Save
        </Button>
    );

    expect(
        screen.getByRole("button")
    ).toHaveTextContent("Loading...");
  });

  it("is disabled when disabled prop is provided", () => {
    render(
        <Button disabled>
          Save
        </Button>
    );

    expect(
        screen.getByRole("button")
    ).toBeDisabled();
  });

  it("is disabled while loading", () => {
    render(
        <Button loading>
        Save
        </Button>
    );

    expect(
        screen.getByRole("button")
    ).toBeDisabled();
  });

  it("forwards native button props", () => {
    render(
        <Button aria-label="save-button">
        Save
        </Button>
    );

    expect(
        screen.getByLabelText("save-button")
    ).toBeInTheDocument();
  });

  it("renders a button element", () => {
    render(
        <Button>
            Click Me
        </Button>
    );

    expect(
        screen.getByRole("button")
    ).toBeInTheDocument();
  });
});
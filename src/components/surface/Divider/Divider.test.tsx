import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders divider", () => {
    render(
      <Divider data-testid="divider" />
    );

    expect(
      screen.getByTestId("divider")
    ).toBeInTheDocument();
  });

  it("renders horizontal divider by default", () => {
    render(
      <Divider data-testid="divider" />
    );

    expect(
      screen.getByTestId("divider")
    ).toBeInTheDocument();
  });

  it("renders vertical divider", () => {
    render(
      <Divider
        orientation="vertical"
        data-testid="divider"
      />
    );

    expect(
      screen.getByTestId("divider")
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(
      <Divider
        className="custom-divider"
        data-testid="divider"
      />
    );

    expect(
      screen.getByTestId("divider")
    ).toHaveClass("custom-divider");
  });

  it("forwards native props", () => {
    render(
      <Divider
        aria-label="section-divider"
      />
    );

    expect(
      screen.getByLabelText(
        "section-divider"
      )
    ).toBeInTheDocument();
  });
});
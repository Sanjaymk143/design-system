import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(
      <Card>
        Card Content
      </Card>
    );

    expect(
      screen.getByText("Card Content")
    ).toBeInTheDocument();
  });

  it("renders elevated card", () => {
    render(
      <Card elevated>
        Card Content
      </Card>
    );

    expect(
      screen.getByText("Card Content")
    ).toBeInTheDocument();
  });

  it("renders borderless card", () => {
    render(
      <Card bordered={false}>
        Card Content
      </Card>
    );

    expect(
      screen.getByText("Card Content")
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(
      <Card className="custom-card" data-testid="card">
        Card Content
      </Card>
    );

    expect(
      screen.getByTestId("card")
    ).toHaveClass("custom-card");
  });

  it("forwards native props", () => {
    render(
      <Card data-testid="card">
        Card Content
      </Card>
    );

    expect(
      screen.getByTestId("card")
    ).toBeInTheDocument();
  });
});
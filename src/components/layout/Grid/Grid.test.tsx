import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders children", () => {
    render(
      <Grid>
        <div>Card 1</div>
        <div>Card 2</div>
      </Grid>
    );

    expect(
      screen.getByText("Card 1")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Card 2")
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    const { container } = render(
        <Grid className="custom-grid">
          Content
        </Grid>
    );

    expect(
        container.firstChild
    ).toHaveClass("custom-grid");
  });
});
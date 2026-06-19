import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders children", () => {
    render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    expect(
      screen.getByText("Item 1")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Item 2")
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    const { container } = render(
        <Stack className="custom-stack">
          Content
        </Stack>
    );

    expect(
        container.firstChild
    ).toHaveClass("custom-stack");
  });
});
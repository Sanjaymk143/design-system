import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Box } from "./Box";

describe("Box", () => {
  it("renders children", () => {
    render(
      <Box>
        Content
      </Box>
    );

    expect(
      screen.getByText("Content")
    ).toBeInTheDocument();
  });

  it("forwards native div props", () => {
    render(
      <Box
        data-testid="box"
      >
        Content
      </Box>
    );

    expect(
      screen.getByTestId("box")
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    const { container } = render(
        <Box className="custom-box">
          Content
        </Box>
    );

    expect(
        container.firstChild
    ).toHaveClass("custom-box");
  });
});
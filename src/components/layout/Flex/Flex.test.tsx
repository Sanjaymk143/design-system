import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders children", () => {
    render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
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
        <Flex className="custom-flex">
           Content
        </Flex>
    );

    expect(
        container.firstChild
    ).toHaveClass("custom-flex");
  });
});
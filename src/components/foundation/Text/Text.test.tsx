import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Text } from "./Text";

describe("Text", () => {
  it("renders children", () => {
    render(
      <Text>
        Hello World
      </Text>
    );

    expect(
      screen.getByText(
        "Hello World"
      )
    ).toBeInTheDocument();
  });

  it("renders as a paragraph", () => {
    render(
      <Text>
        Paragraph Content
      </Text>
    );

    expect(
      screen.getByText(
        "Paragraph Content"
      ).tagName
    ).toBe("P");
  });

  it("forwards className", () => {
    render(
      <Text className="custom-text">
        Hello World
      </Text>
    );

    expect(
      screen.getByText(
        "Hello World"
      )
    ).toHaveClass(
      "custom-text"
    );
  });
});
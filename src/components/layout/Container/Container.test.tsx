import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(
      <Container>
        Content
      </Container>
    );

    expect(
      screen.getByText("Content")
    ).toBeInTheDocument();
  });

  it("forwards native div props", () => {
    render(
      <Container
        data-testid="container"
      >
        Content
      </Container>
    );

    expect(
      screen.getByTestId(
        "container"
      )
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    const { container } = render(
        <Container className="custom-container">
            Content
        </Container>
    );

    expect(
        container.firstChild
    ).toHaveClass("custom-container");
  });
});
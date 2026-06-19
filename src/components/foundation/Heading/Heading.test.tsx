import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders children", () => {
    render(
      <Heading>
        Page Title
      </Heading>
    );

    expect(
      screen.getByText(
        "Page Title"
      )
    ).toBeInTheDocument();
  });

  it("renders h1 by default", () => {
    render(
      <Heading>
        Page Title
      </Heading>
    );

    expect(
      screen.getByRole(
        "heading",
        {
          level: 1,
        }
      )
    ).toBeInTheDocument();
  });

  it("renders h2", () => {
    render(
      <Heading level={2}>
        Section Title
      </Heading>
    );

    expect(
      screen.getByRole(
        "heading",
        {
          level: 2,
        }
      )
    ).toBeInTheDocument();
  });

  it("renders h3", () => {
    render(
      <Heading level={3}>
        Section Title
      </Heading>
    );

    expect(
      screen.getByRole(
        "heading",
        {
          level: 3,
        }
      )
    ).toBeInTheDocument();
  });

  it("renders h4", () => {
    render(
      <Heading level={4}>
        Section Title
      </Heading>
    );

    expect(
      screen.getByRole(
        "heading",
        {
          level: 4,
        }
      )
    ).toBeInTheDocument();
  });

  it("renders h5", () => {
    render(
      <Heading level={5}>
        Section Title
      </Heading>
    );

    expect(
      screen.getByRole(
        "heading",
        {
          level: 5,
        }
      )
    ).toBeInTheDocument();
  });

  it("renders h6", () => {
    render(
      <Heading level={6}>
        Section Title
      </Heading>
    );

    expect(
      screen.getByRole(
        "heading",
        {
          level: 6,
        }
      )
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    render(
      <Heading className="custom-heading">
        Page Title
      </Heading>
    );

    expect(
      screen.getByRole(
        "heading"
      )
    ).toHaveClass(
      "custom-heading"
    );
  });
});
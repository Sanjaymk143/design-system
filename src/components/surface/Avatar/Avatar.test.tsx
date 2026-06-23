import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials from full name", () => {
    render(
      <Avatar
        name="John Doe"
      />
    );

    expect(
      screen.getByText("JD")
    ).toBeInTheDocument();
  });

  it("renders initials from single name", () => {
    render(
      <Avatar
        name="John"
      />
    );

    expect(
      screen.getByText("J")
    ).toBeInTheDocument();
  });

  it("renders image when src is provided", () => {
    render(
      <Avatar
        src="avatar.jpg"
        alt="Profile"
      />
    );

    expect(
      screen.getByAltText("Profile")
    ).toBeInTheDocument();
  });

  it("does not render initials when image is provided", () => {
    render(
      <Avatar
        src="avatar.jpg"
        alt="Profile"
        name="John Doe"
      />
    );

    expect(
      screen.queryByText("JD")
    ).not.toBeInTheDocument();
  });

  it("applies size attribute", () => {
    render(
      <Avatar
        name="John Doe"
        size="lg"
        data-testid="avatar"
      />
    );

    expect(
      screen.getByTestId("avatar")
    ).toHaveAttribute(
      "data-size",
      "lg"
    );
  });

  it("forwards className", () => {
    render(
      <Avatar
        name="John Doe"
        className="custom-avatar"
      />
    );

    expect(
      screen.getByText("JD")
        .parentElement
    ).toHaveClass("custom-avatar");
  });

  it("forwards native props", () => {
    render(
      <Avatar
        name="John Doe"
        data-testid="avatar"
      />
    );

    expect(
      screen.getByTestId("avatar")
    ).toBeInTheDocument();
  });
});
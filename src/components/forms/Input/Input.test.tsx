import { createRef } from "react";

import {
  render,
  screen,
} from "@testing-library/react";
import {
  describe,
  expect,
  it,
} from "vitest";

import { Input } from "./Input";

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input />);

    expect(
      screen.getByRole("textbox")
    ).toBeInTheDocument();
  });

  it("renders placeholder text", () => {
    render(
      <Input placeholder="Enter your name" />
    );

    expect(
      screen.getByPlaceholderText(
        "Enter your name"
      )
    ).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Input disabled />);

    expect(
      screen.getByRole("textbox")
    ).toBeDisabled();
  });

  it("forwards refs correctly", () => {
    const ref =
      createRef<HTMLInputElement>();

    render(<Input ref={ref} />);

    expect(
      ref.current
    ).toBeInstanceOf(
      HTMLInputElement
    );
  });

  it("forwards native input props", () => {
    render(
      <Input
        aria-label="name-input"
      />
    );

    expect(
      screen.getByLabelText(
        "name-input"
      )
    ).toBeInTheDocument();
  });

  it("accepts user input", () => {
    render(<Input />);

    const input =
      screen.getByRole(
        "textbox"
      ) as HTMLInputElement;

    input.value = "Sanjay";

    expect(input.value).toBe(
      "Sanjay"
    );
  });
});
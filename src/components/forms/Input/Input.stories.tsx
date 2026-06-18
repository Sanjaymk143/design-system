import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Input } from "./Input";

const meta = {
  title: "Forms/Input",

  component: Input,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  argTypes: {
    error: {
      control: "boolean",
    },

    fullWidth: {
      control: "boolean",
    },

    type: {
      control: "select",

      options: [
        "text",
        "email",
        "password",
        "number",
      ],
    },
  },

  args: {
    placeholder: "Enter text...",
    type: "text",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const Default: Story =
  {};

export const Error: Story = {
  args: {
    error: true,
    placeholder:
      "Invalid input",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder:
      "Disabled input",
  },
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <Input
        placeholder="Default Input"
      />

      <Input
        error
        placeholder="Error Input"
      />

      <Input
        disabled
        placeholder="Disabled Input"
      />

      <Input
        fullWidth
        placeholder="Full Width Input"
      />
    </div>
  ),
};
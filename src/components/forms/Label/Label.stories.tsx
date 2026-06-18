import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Label } from "./Label";

const meta = {
  title: "Forms/Label",

  component: Label,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  argTypes: {
    required: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },
  },

  args: {
    children: "Label",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const Default: Story =
  {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Label>
        Default Label
      </Label>

      <Label required>
        Required Label
      </Label>

      <Label disabled>
        Disabled Label
      </Label>

      <Label
        htmlFor="email"
        required
      >
        Email Address
      </Label>
    </div>
  ),
};
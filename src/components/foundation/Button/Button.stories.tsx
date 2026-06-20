import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Button } from "./Button";

const meta = {
  title: "Foundation/Button",
  component: Button,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "danger",
      ],
    },

    size: {
      control: "select",
      options: [
        "sm",
        "md",
        "lg",
      ],
    },

    fullWidth: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },
  },

  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
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
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <Button variant="primary">
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button loading>
        Loading
      </Button>

      <Button disabled>
        Disabled
      </Button>
    </div>
  ),
};

export const Accessibility: Story = {
  args: {
    children: "Save Changes",
    "aria-label": "Save Changes",
  },
};
import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Badge } from "./Badge";

const meta = {
  title: "Feedback/Badge",
  component: Badge,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "success",
        "warning",
        "danger",
      ],
    },
  },

  args: {
    children: "Badge",
    variant: "default",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <Badge>Default</Badge>

      <Badge variant="success">
        Success
      </Badge>

      <Badge variant="warning">
        Warning
      </Badge>

      <Badge variant="danger">
        Danger
      </Badge>
    </div>
  ),
};
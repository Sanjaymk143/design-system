import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Spinner } from "./Spinner";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  argTypes: {
    size: {
      control: "select",
      options: [
        "sm",
        "md",
        "lg",
      ],
    },
  },

  args: {
    size: "md",
  },
} satisfies Meta<typeof Spinner>;

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
        alignItems: "center",
      }}
    >
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
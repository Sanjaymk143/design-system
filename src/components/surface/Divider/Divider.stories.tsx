import type { Meta, StoryObj } from "@storybook/react-vite";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Surface/Divider",
  component: Divider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Divider {...args} />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div>Section One</div>

      <Divider />

      <div>Section Two</div>
    </div>
  ),
};
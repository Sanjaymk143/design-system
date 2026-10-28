import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./Avatar";

const meta = {
  title: "Surface/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    src: { control: "text" },
    alt: { control: "text" },
    name: { control: "text" },
  },
  args: {
    name: "Sanjay Kumar",
    size: "md",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "User Avatar",
    name: "John Doe",
  },
};

export const InitialsFallback: Story = {
  args: { name: "John Doe" },
};

export const SingleName: Story = {
  args: { name: "John" },
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=3" alt="User" size="md" />
    </div>
  ),
};

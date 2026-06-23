import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Surface/Avatar",
  component: Avatar,
  args: {
    name: "Sanjay Kumar",
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "User Avatar",
    name: "John Doe",
  },
};

export const InitialsFallback: Story = {
  args: {
    name: "John Doe",
  },
};

export const SingleName: Story = {
  args: {
    name: "John",
  },
};
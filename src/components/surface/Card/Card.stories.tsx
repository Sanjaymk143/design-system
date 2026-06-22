import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stack } from "@/components/layout";

import { Card } from "./Card";

const meta = {
  title: "Surface/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: "This is a card component.",
  },
  argTypes: {
    elevated: {
      control: "boolean",
    },
    bordered: {
      control: "boolean",
    },
    padding: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Elevated: Story = {
  args: {
    elevated: true,
  },
};

export const Borderless: Story = {
  args: {
    bordered: false,
  },
};

export const LargePadding: Story = {
  args: {
    padding: "lg",
  },
};

export const Showcase: Story = {
  render: () => (
    <Stack gap="md">
      <Card>
        Default Card
      </Card>

      <Card elevated>
        Elevated Card
      </Card>

      <Card bordered={false}>
        Borderless Card
      </Card>

      <Card padding="lg">
        Large Padding Card
      </Card>
    </Stack>
  ),
};
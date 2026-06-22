import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stack } from "@/components/layout";

import { Alert } from "./Alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    children:
      "This is an informational alert message.",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "info",
        "success",
        "warning",
        "danger",
      ],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    children:
      "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children:
      "Please review your information before continuing.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Error",
    children:
      "Something went wrong. Please try again.",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Information",
    children:
      "This alert contains a title and message.",
  },
};

export const Showcase: Story = {
  render: () => (
    <Stack gap="md">
      <Alert
        variant="info"
        title="Information"
      >
        This is an informational alert.
      </Alert>

      <Alert
        variant="success"
        title="Success"
      >
        Operation completed successfully.
      </Alert>

      <Alert
        variant="warning"
        title="Warning"
      >
        Please review this action carefully.
      </Alert>

      <Alert
        variant="danger"
        title="Error"
      >
        Something went wrong while processing
        your request.
      </Alert>
    </Stack>
  ),
};
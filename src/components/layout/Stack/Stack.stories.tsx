import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Stack } from "./Stack";

const meta = {
  title: "Layout/Stack",

  component: Stack,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  argTypes: {
    gap: {
      control: "select",

      options: [
        "sm",
        "md",
        "lg",
      ],
    },
  },

  args: {
    gap: "md",
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story =
  StoryObj<typeof meta>;

const Item = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    style={{
      padding: "1rem",
      border: "1px solid #ccc",
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <Item>Item 1</Item>

      <Item>Item 2</Item>

      <Item>Item 3</Item>
    </Stack>
  ),
};

export const Showcase: Story = {
  render: () => (
    <Stack gap="lg">
      <Item>Profile Information</Item>

      <Item>Account Settings</Item>

      <Item>Notifications</Item>

      <Item>Security</Item>
    </Stack>
  ),
};
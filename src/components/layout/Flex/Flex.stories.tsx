import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Flex } from "./Flex";

const meta = {
  title: "Layout/Flex",

  component: Flex,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  argTypes: {
    justify: {
      control: "select",
      options: [
        "start",
        "center",
        "end",
        "between",
      ],
    },

    align: {
      control: "select",
      options: [
        "start",
        "center",
        "end",
        "stretch",
      ],
    },
  },

  args: {
    justify: "start",
    align: "stretch",
  },
} satisfies Meta<typeof Flex>;

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
      minWidth: "80px",
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Flex>
  ),
};

export const Showcase: Story = {
  render: () => (
    <Flex justify="between" align="center">
      <Item>Logo</Item>
      <Item>Navigation</Item>
      <Item>Actions</Item>
    </Flex>
  ),
};
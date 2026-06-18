import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Text } from "./Text";

const meta = {
  title: "Foundation/Text",

  component: Text,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  argTypes: {
    size: {
      control: "select",

      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],
    },
  },

  args: {
    children:
      "The quick brown fox jumps over the lazy dog.",

    size: "md",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const Default: Story =
  {};

export const Showcase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Text size="xs">
        Extra Small Text
      </Text>

      <Text size="sm">
        Small Text
      </Text>

      <Text size="md">
        Medium Text
      </Text>

      <Text size="lg">
        Large Text
      </Text>

      <Text size="xl">
        Extra Large Text
      </Text>
    </div>
  ),
};
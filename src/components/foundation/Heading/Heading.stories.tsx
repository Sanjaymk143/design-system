import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Heading } from "./Heading";

const meta = {
  title: "Foundation/Heading",

  component: Heading,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  argTypes: {
    level: {
      control: "select",

      options: [
        1,
        2,
        3,
        4,
        5,
        6,
      ],
    },
  },

  args: {
    children:
      "Design System Heading",

    level: 1,
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 1,
  },
};

export const H2: Story = {
  args: {
    level: 2,
  },
};

export const H3: Story = {
  args: {
    level: 3,
  },
};

export const H4: Story = {
  args: {
    level: 4,
  },
};

export const H5: Story = {
  args: {
    level: 5,
  },
};

export const H6: Story = {
  args: {
    level: 6,
  },
};

export const Accessibility: Story = {
  render: () => (
    <>
      <Heading level={1}>
        Page Title
      </Heading>

      <Heading level={2}>
        Section Title
      </Heading>

      <Heading level={3}>
        Sub Section
      </Heading>
    </>
  ),
};
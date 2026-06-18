import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Box } from "./Box";

const meta = {
  title: "Layout/Box",

  component: Box,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Box>
      <div
        style={{
          padding: "1rem",
          border: "1px solid #ccc",
        }}
      >
        Box Content
      </div>
    </Box>
  ),
};

export const Showcase: Story = {
  render: () => (
    <Box>
      <div
        style={{
          padding: "2rem",
          border: "1px solid #ccc",
        }}
      >
        <h3>Card Title</h3>

        <p>
          Box can be used as a
          generic wrapper for
          layouts and content.
        </p>
      </div>
    </Box>
  ),
};
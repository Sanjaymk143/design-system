import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Container } from "./Container";

const meta = {
  title: "Layout/Container",

  component: Container,

  tags: ["autodocs"],

  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story =
  StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container>
      <div
        style={{
          padding: "2rem",
          border: "1px solid #ccc",
        }}
      >
        Container Content
      </div>
    </Container>
  ),
};

export const Showcase: Story = {
  render: () => (
    <Container>
      <div
        style={{
          padding: "2rem",
          border: "1px solid #ccc",
        }}
      >
        <h2>Page Title</h2>

        <p>
          This content is wrapped
          inside a Container.
        </p>
      </div>
    </Container>
  ),
};
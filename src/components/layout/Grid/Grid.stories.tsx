import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Grid } from "./Grid";

const meta = {
  title: "Layout/Grid",

  component: Grid,

  tags: ["autodocs"],

  parameters: {
    layout: "padded",
  },

  argTypes: {
    columns: {
      control: {
        type: "number",
      },
    },
  },

  args: {
    columns: 2,
  },
} satisfies Meta<typeof Grid>;

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
    <Grid {...args}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
    </Grid>
  ),
};

export const Showcase: Story = {
  render: () => (
    <Grid columns={3}>
      <Item>Card 1</Item>
      <Item>Card 2</Item>
      <Item>Card 3</Item>
      <Item>Card 4</Item>
      <Item>Card 5</Item>
      <Item>Card 6</Item>
    </Grid>
  ),
};
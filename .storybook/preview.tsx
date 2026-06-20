import type { Preview } from '@storybook/react-vite'
import "../src/styles/main.scss";
import { ThemeDecorator } from "./ThemeDecorator";

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <ThemeDecorator
        theme={context.globals.theme}
      >
        <Story />
      </ThemeDecorator>
    ),
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "light",

      toolbar: {
        icon: "mirror",
        items: [
          {
            value: "light",
            title: "Light",
          },
          {
            value: "dark",
            title: "Dark",
          },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error'
    }
  },
};

export default preview;
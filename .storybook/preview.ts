import type { Preview } from "@storybook/react"
import "../src/styles/global.css"
import { StoryBookProvider } from "./StorybookProvider"

const preview: Preview = {
  decorators: [StoryBookProvider],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

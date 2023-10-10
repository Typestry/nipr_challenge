import { App } from "./App"

export default {
  title: "App",
  component: App,
  parameters: {
    layout: "fullscreen",
  },
}

export const Example = () => (
  <div className="h-[100vh]">
    <App />
  </div>
)

import { FC } from "react"
import { Providers } from "../src/providers"

export const StoryBookProvider = (Story: FC) => {
  return (
    <Providers>
      <Story />
    </Providers>
  )
}

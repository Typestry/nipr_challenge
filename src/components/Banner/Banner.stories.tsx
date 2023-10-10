import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Banner } from "./Banner"

const mockData = {
  imageUrl:
    "https://images.unsplash.com/photo-1696593488550-d740f3396611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  linkUrl: "/gb/en/viewallwomens",
  linkText: "New, React JS Sneakers made for comfort.",
  ctaText: "Shop Now",
}

const meta: Meta<typeof Banner> = {
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    buttonText: mockData.ctaText,
    linkText: mockData.linkText,
    imageUrl: mockData.imageUrl,
    linkUrl: mockData.linkUrl,
  },
  argTypes: {
    onCTAClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: (args) => (
    <div className="h-[100vh]">
      <Banner {...args} />
    </div>
  ),
}

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Banner } from "./Banner"

describe("Banner", () => {
  it("renders", () => {
    // Arrange
    const buttonText = "Hello World"
    const linkText = "Link Text"

    // Act
    render(
      <Banner
        onCTAClick={() => null}
        buttonText={buttonText}
        linkText={linkText}
        imageUrl=""
        linkUrl=""
      />,
    )

    const button = screen.getByText(buttonText)
    const link = screen.getByText(linkText)

    // Assert
    expect(button).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it("invokes onCTAClick when the button is clicked", () => {
    // Arrange
    const buttonText = "Hello World"
    const linkText = "Link Text"
    const onCTAClick = vi.fn()

    // Act
    render(
      <Banner
        onCTAClick={onCTAClick}
        buttonText={buttonText}
        linkText={linkText}
        imageUrl=""
        linkUrl=""
      />,
    )

    const button = screen.getByText(buttonText)
    button.click()

    // Assert
    expect(onCTAClick).toHaveBeenCalled()
  })
})

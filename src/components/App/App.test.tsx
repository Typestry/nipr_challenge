import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { App } from "."

describe("App", () => {
  it("should render", () => {
    // Arrange
    const text = "Hello World"

    // Act
    render(<App />)

    const received = screen.getByText(text)

    // Assert
    expect(received).toBeInTheDocument()
  })
})

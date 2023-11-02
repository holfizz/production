import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "widgets/sidebar"
import { renderWithTranslation } from "shared/lib/tools/renderWithoutTranslation/renderWithTranslation"

describe("Sidebar", () => {
    test("test sidebar ", () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })
    test("test toggle ", () => {
        renderWithTranslation(<Sidebar />)
        const toggleButton = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    })
})



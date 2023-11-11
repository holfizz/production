import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "widgets/sidebar"
// eslint-disable-next-line max-len
import { componentRender } from "shared/lib/tools/componentRender/componentRender"

describe("Sidebar", () => {
    test("test sidebar ", () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })
    test("test toggle ", () => {
        componentRender(<Sidebar />)
        const toggleButton = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    })
})
 

